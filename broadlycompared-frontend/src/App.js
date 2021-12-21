import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BroadbandList from './components/BroadbandList';
import { Button, Card, IconButton } from '@mui/material';
import styles from './styles';

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import ComparePopup from './components/ComparePopup';

function App() {
    const [broadbandDeals, setBroadbandDeals] = useState();
    const [chosenDeals, setChosenDeals] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const getAll = async () => {
            const URL =
                'https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals';
            const response = await axios.get(URL);

            setBroadbandDeals(response.data);
        };

        getAll();
    }, []);

    if (!broadbandDeals) {
        return <div>Loading...</div>;
    }

    if (chosenDeals.length === 0) {
        if (isDrawerOpen) {
            setIsDrawerOpen(false);
        }
    }

    console.log(chosenDeals);

    const toggleChosenDeals = (newDeal) => {
        if (chosenDeals.includes(newDeal)) {
            setChosenDeals(chosenDeals.filter((deal) => deal !== newDeal));
        } else {
            if (chosenDeals.length === 2) {
                return;
            }
            setChosenDeals([...chosenDeals, newDeal]);
            setIsDrawerOpen(true);
        }
    };

    const removeCard = (dealToRemove) => {
        setChosenDeals(
            chosenDeals.filter((deal) => deal.deal_id !== dealToRemove)
        );
    };

    const compareDeals = () => {
        setIsPopupOpen(true);
    };

    return (
        <div>
            <BroadbandList
                broadbandDeals={broadbandDeals}
                chosenDeals={chosenDeals}
                toggleChosenDeals={toggleChosenDeals}
            />
            <Drawer
                sx={{
                    width: '100%',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '100%',
                        boxSizing: 'border-box',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    },
                }}
                variant="persistent"
                anchor="bottom"
                open={isDrawerOpen}
            >
                <Divider />
                {chosenDeals.map((deal) => (
                    <Card
                        key={deal.deal_id}
                        variant="outlined"
                        style={styles.cardContainer}
                    >
                        <img
                            src={deal.provider_logo_image_url}
                            alt={`Logo for ${deal.provider_name}`}
                            style={styles.logo}
                        />
                        <div>
                            <div>{deal.provider_name}</div>
                            <div style={styles.dealName}>{deal.deal_name}</div>
                        </div>
                        <IconButton onClick={() => removeCard(deal.deal_id)}>
                            <CloseIcon style={styles.closeIcon} />
                        </IconButton>
                    </Card>
                ))}
                <Button
                    variant="contained"
                    onClick={compareDeals}
                    style={styles.compareButton}
                >
                    Compare deals ({chosenDeals.length} of 2)
                </Button>
            </Drawer>
            {isPopupOpen && <ComparePopup />}
        </div>
    );
}

export default App;
