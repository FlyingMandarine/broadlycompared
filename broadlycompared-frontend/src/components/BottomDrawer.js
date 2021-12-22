import React from 'react';
import styles from '../styles';
import { Button, Card, Drawer, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BottomDrawer = ({
    chosenDeals,
    isDrawerOpen,
    compareDeals,
    removeCard,
}) => {
    return (
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
    );
};

export default BottomDrawer;
