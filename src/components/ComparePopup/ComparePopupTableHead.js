import React from 'react';
import styles from '../../styles';
import { Button, TableCell, TableHead, TableRow } from '@mui/material';

const ComparePopupTableHead = ({ deals, handleRemove }) => {
    return (
        <TableHead>
            <TableRow>
                <TableCell></TableCell>
                {deals.map((deal) => (
                    <TableCell key={deal.deal_id}>
                        <div>
                            <span
                                onClick={() => handleRemove(deal.deal_id)}
                                style={styles.removeLink}
                            >
                                Remove
                            </span>
                        </div>
                        <div style={styles.tableTop}>
                            <div style={styles.logoDiv}>
                                <img
                                    src={deal.provider_logo_image_url}
                                    alt={`Logo for ${deal.provider_name}`}
                                    style={styles.logo}
                                />
                            </div>
                            <div>
                                <div style={styles.providerName}>
                                    {deal.provider_name}
                                </div>
                                <div style={styles.dealName}>
                                    {deal.deal_name}
                                </div>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            style={styles.compareContinueButton}
                        >
                            Continue
                        </Button>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default ComparePopupTableHead;
