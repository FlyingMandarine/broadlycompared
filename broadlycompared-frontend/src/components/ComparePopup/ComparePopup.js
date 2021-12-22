import React from 'react';
import styles from '../../styles';
import Dialog from '@mui/material/Dialog';
import { Divider, Table, TableContainer } from '@mui/material';
import ComparePopupTableHead from './ComparePopupTableHead';
import ComparePopupTableBody from './ComparePopupTableBody';

const ComparePopup = ({ deals, closePopup, handleRemove }) => {
    if (deals.length === 0) {
        closePopup();
    }

    return (
        <Dialog
            onClose={() => closePopup()}
            open={true}
            maxWidth="xl"
            PaperProps={{
                style: { borderRadius: 20, padding: '0 20px 80px 20px' },
            }}
        >
            <>
                <h1 style={styles.compareH1}>Compare</h1>
                <Divider />
                <div style={styles.popupInnerContainer}>
                    <div>
                        <div style={styles.popupTop}>
                            <TableContainer>
                                <Table>
                                    <ComparePopupTableHead
                                        deals={deals}
                                        handleRemove={handleRemove}
                                    />
                                    <ComparePopupTableBody deals={deals} />
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </>
        </Dialog>
    );
};

export default ComparePopup;
