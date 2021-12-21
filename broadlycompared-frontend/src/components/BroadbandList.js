import React from 'react';
import { Button, Container, Divider, Rating, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddRemove from './AddRemove';
import styles from '../styles';

const BroadbandList = ({ broadbandDeals, chosenDeals, toggleChosenDeals }) => {
    return (
        <Container maxWidth="xl" style={styles.mainContainer}>
            <Stack divider={<Divider />}>
                {broadbandDeals.deals.map((deal, i) => (
                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        textAlign="center"
                        key={deal.deal_id}
                        style={styles.listContainer}
                    >
                        <div style={styles.logoDiv}>
                            <img
                                src={deal.provider_logo_image_url}
                                alt={`Logo for ${deal.provider_name}`}
                                style={styles.logo}
                            />
                        </div>
                        <div style={styles.providerInfo}>
                            <div style={styles.providerName}>
                                {deal.provider_name}
                            </div>
                            <div style={styles.dealName}>{deal.deal_name}</div>
                            <Rating
                                name="providerRating"
                                value={deal.provider_rating * 5}
                                precision={0.5}
                                readOnly
                                style={{ color: '#1976d2' }}
                            />
                        </div>
                        <div style={styles.monthlyPrice}>
                            <div style={styles.monthlyPriceTop}>
                                £{deal.monthly_price.toFixed(2)}
                            </div>
                            <div>Monthly cost</div>
                        </div>
                        <div style={styles.internetSpeed}>
                            <div style={styles.listItemGenericTop}>
                                {deal.internet_speed} Mbps
                            </div>
                            <div style={styles.listItemGenericBottom}>
                                {deal.broadband_type}
                            </div>
                        </div>
                        <div style={styles.setupCost}>
                            <div style={styles.listItemGenericTop}>
                                £{deal.set_up_cost}
                            </div>
                            <div style={styles.listItemGenericBottom}>
                                Setup Costs
                            </div>
                        </div>
                        <div style={styles.contractLength}>
                            <div style={styles.listItemGenericTop}>
                                {deal.contract_info}
                            </div>
                            <div style={styles.listItemGenericBottom}>
                                Contract
                            </div>
                        </div>
                        <AddRemove
                            deal={deal}
                            chosenDeals={chosenDeals}
                            toggleChosenDeals={toggleChosenDeals}
                        />
                        <div style={styles.listButtonDiv}>
                            <Button
                                variant="contained"
                                style={styles.listButton}
                            >
                                Continue
                            </Button>
                        </div>
                        <div style={styles.moreInfo}>
                            More info
                            <ExpandMoreIcon style={styles.moreInfoIcon} />
                        </div>
                    </Stack>
                ))}
            </Stack>
        </Container>
    );
};

export default BroadbandList;
