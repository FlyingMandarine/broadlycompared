import React, { useEffect, useState } from 'react';
import {
    Container,
    Divider,
    Rating,
    Stack,
} from '@mui/material';
import axios from 'axios';

const styles = {
    appContainer: {
        backgroundColor: 'white',
        marginTop: '5%',
        borderRadius: 10,
    },
    listContainer: {
        margin: '20px 0'
    },
    logo: {
        width: 75,
        height: 75,
    },
    providerName: {
        fontWeight: 'bold',
        fontSize: '1.4em',
    },
    dealName: {
        color: 'grey',
    },
    monthlyPrice: {
        color: 'dodgerblue',
    },
    internetSpeed: {},
    setupCost: {},
    contractLength: {},
};

const BroadbandList = () => {
    const [broadbandDeals, setBroadbandDeals] = useState();

    useEffect(() => {
        const getAll = async () => {
            const URL =
                'https://6177b8b59c328300175f5adc.mockapi.io/api/test/deals';
            const response = await axios.get(URL);

            setBroadbandDeals(response.data);
        };

        getAll();
    }, []);

    console.log('broadbandDeals is', broadbandDeals);

    if (!broadbandDeals) {
        return <div>Loading...</div>;
    }

    return (
        <Container style={styles.appContainer}>
            <Stack divider={<Divider />}>
                {broadbandDeals.deals.map((deal, i) => (
                    <Stack
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        key={deal.deal_id}
                        style={styles.listContainer}
                    >
                        <img
                            src={deal.provider_logo_image_url}
                            alt={`Logo for ${deal.provider_name}`}
                            style={styles.logo}
                        />
                        <div>
                            <div style={styles.providerName}>
                                {deal.provider_name}
                            </div>
                            <div style={styles.dealName}>{deal.deal_name}</div>
                            <Rating
                                name="providerRating"
                                value={deal.provider_rating * 5}
                                precision={0.5}
                                readOnly
                                style={{ color: 'dodgerblue' }}
                            />
                        </div>
                        <div style={styles.monthlyPrice}>
                            <div>£{deal.monthly_price}</div>
                            <div>Monthly cost</div>
                        </div>
                        <div style={styles.internetSpeed}>
                            <div>{deal.internet_speed} Mbps</div>
                            <div>{deal.broadband_type}</div>
                        </div>
                        <div style={styles.setupCost}>
                            <div>£{deal.set_up_cost}</div>
                            <div>Setup Costs</div>
                        </div>
                        <div style={styles.contractLength}>
                            <div>{deal.contract_info}</div>
                            <div>Contract</div>
                        </div>
                        <button>Remove</button>
                        <button>Continue</button>
                        <div>More info</div>
                    </Stack>
                ))}
            </Stack>
        </Container>
    );
};

export default BroadbandList;
