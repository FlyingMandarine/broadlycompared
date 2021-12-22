import React from 'react';
import { Rating, TableBody, TableCell, TableRow } from '@mui/material';

const ComparePopupTableBody = ({ deals }) => {
    return (
        <TableBody>
            <TableRow
                style={{
                    backgroundColor: '#e8e8e8',
                }}
            >
                <TableCell>Rating</TableCell>
                {deals.map((deal) => (
                    <TableCell align="center" key={deal.deal_id}>
                        <Rating
                            name="providerRating"
                            value={deal.provider_rating * 5}
                            precision={0.5}
                            readOnly
                            style={{
                                color: '#1976d2',
                            }}
                        />
                    </TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell>Monthly Cost</TableCell>
                {deals.map((deal) => (
                    <TableCell align="center" key={deal.deal_id}>
                        £{deal.monthly_price.toFixed(2)}
                    </TableCell>
                ))}
            </TableRow>
            <TableRow
                style={{
                    backgroundColor: '#e8e8e8',
                }}
            >
                <TableCell>Tariff Type</TableCell>
                {deals.map((deal) => (
                    <TableCell align="center" key={deal.deal_id}>
                        {deal.deal_type ? deal.deal_type : 'N/A'}
                    </TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell>Speed</TableCell>
                {deals.map((deal) => (
                    <TableCell align="center" key={deal.deal_id}>
                        {deal.internet_speed} Mbps
                    </TableCell>
                ))}
            </TableRow>
            <TableRow
                style={{
                    backgroundColor: '#e8e8e8',
                }}
            >
                <TableCell>Broadband Type</TableCell>
                {deals.map((deal) => (
                    <TableCell align="center" key={deal.deal_id}>
                        {deal.broadband_type}
                    </TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell>Setup Cost</TableCell>
                {deals.map((deal) => (
                    <TableCell align="center" key={deal.deal_id}>
                        £{deal.set_up_cost}
                    </TableCell>
                ))}
            </TableRow>
            <TableRow
                style={{
                    backgroundColor: '#e8e8e8',
                }}
            >
                <TableCell>One-Off Cost</TableCell>
                {deals.map((deal) => (
                    <TableCell align="center" key={deal.deal_id}>
                        £0
                    </TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell>Term End</TableCell>
                {deals.map((deal) => (
                    <TableCell align="center" key={deal.deal_id}>
                        {deal.contract_info}
                    </TableCell>
                ))}
            </TableRow>
            <TableRow
                style={{
                    backgroundColor: '#e8e8e8',
                }}
            >
                <TableCell>Data Limits</TableCell>
                {deals.map((deal) => (
                    <TableCell align="center" key={deal.deal_id}>
                        {deal.data_limits}
                    </TableCell>
                ))}
            </TableRow>
        </TableBody>
    );
};

export default ComparePopupTableBody;
