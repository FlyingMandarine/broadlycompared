import React from 'react';
import { Button } from '@mui/material';
import styles from '../styles';

const AddRemove = ({ deal, chosenDeals, toggleChosenDeals }) => {
    return (
        <div style={styles.listButtonDiv}>
            {chosenDeals.length === 2 &&
            !chosenDeals.some((d) => d.deal_id === deal.deal_id) ? (
                    <Button variant="outlined" disabled style={styles.listButton}>
                        Add to Compare
                    </Button>
                ) : (
                    <Button
                        variant="outlined"
                        onClick={() => toggleChosenDeals(deal)}
                        style={styles.listButton}
                    >
                        {chosenDeals.some((d) => d.deal_id === deal.deal_id)
                            ? 'Remove'
                            : 'Add to Compare'}
                    </Button>
                )}
        </div>
    );
};

export default AddRemove;
