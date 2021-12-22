import React, { useEffect, useState } from 'react';
import dealsService from './services/deals';
import BroadbandList from './components/BroadbandList';
import ComparePopup from './components/ComparePopup/ComparePopup';
import BottomDrawer from './components/BottomDrawer';
import { Container } from '@mui/material';
import styles from './styles';

import LoadingButton from '@mui/lab/LoadingButton';

const App = () => {
    const [broadbandDeals, setBroadbandDeals] = useState();
    const [chosenDeals, setChosenDeals] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const fetchDeals = async () => {
            const deals = await dealsService.getAll();
            setBroadbandDeals(deals);
        };

        fetchDeals();
    }, []);

    // If no deals are chosen and the bottom drawer and/or the Compare popup
    // are open, close them.
    if (chosenDeals.length === 0) {
        if (isDrawerOpen) {
            setIsDrawerOpen(false);
            setIsPopupOpen(false);
        }
    }

    const toggleChosenDeals = (newDeal) => {
        // If the deal has already been selected, filter it out.
        if (chosenDeals.includes(newDeal)) {
            setChosenDeals(chosenDeals.filter((deal) => deal !== newDeal));
        } else {
            // Otherwise, add it to the chosen deals' array.
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

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            {broadbandDeals ? (
                <div>
                    <BroadbandList
                        broadbandDeals={broadbandDeals}
                        chosenDeals={chosenDeals}
                        toggleChosenDeals={toggleChosenDeals}
                    />
                    <BottomDrawer
                        chosenDeals={chosenDeals}
                        isDrawerOpen={isDrawerOpen}
                        compareDeals={compareDeals}
                        removeCard={removeCard}
                    />
                    {isPopupOpen && (
                        <ComparePopup
                            deals={chosenDeals}
                            isPopupOpen={isPopupOpen}
                            closePopup={closePopup}
                            handleRemove={removeCard}
                        />
                    )}
                </div>
            ) : (
                <Container style={styles.loadingContainer}>
                    <LoadingButton
                        loading
                        variant="contained"
                        style={{ backgroundColor: 'grey' }}
                    >
                        Loading
                    </LoadingButton>
                </Container>
            )}
        </div>
    );
};

export default App;
