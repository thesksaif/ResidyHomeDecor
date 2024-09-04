import PropTypes from 'prop-types';
import { useState } from 'react';
import { Grid, Typography, Stack, Button, Card, CardActionArea, CardContent, IconButton } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';

// Dummy data for options
const propertyTypes = [
    { label: 'HDB', value: 'hdb' },
    { label: 'Condo', value: 'condo' }
];

const unitTypes = [
    { label: 'New', value: 'new' },
    { label: 'Resale', value: 'resale' }
];

const rooms = [
    { label: 'Living Room', value: 'livingRoom' },
    { label: 'Kitchen', value: 'kitchen' },
    { label: 'Bedroom', value: 'bedroom' },
    { label: 'Bathroom', value: 'bathroom' }
];

const HouseDetail = ({ shippingData, setShippingData, handleNext, setErrorIndex }) => {
    const [selectedPropertyType, setSelectedPropertyType] = useState(shippingData.propertyType || '');
    const [selectedUnitType, setSelectedUnitType] = useState(shippingData.unitType || '');
    const [selectedRooms, setSelectedRooms] = useState(shippingData.rooms || {});

    const handleSelectPropertyType = (type) => {
        setSelectedPropertyType(type);
        setShippingData({ ...shippingData, propertyType: type });
    };

    const handleSelectUnitType = (type) => {
        setSelectedUnitType(type);
        setShippingData({ ...shippingData, unitType: type });
    };

    const handleRoomChange = (room, change) => {
        const newCount = (selectedRooms[room] || 0) + change;
        const newRooms = { ...selectedRooms, [room]: newCount < 0 ? 0 : newCount };
        setSelectedRooms(newRooms);
        setShippingData({ ...shippingData, rooms: newRooms });
    };

    const handleSubmit = () => {
        if (selectedPropertyType && selectedUnitType && Object.keys(selectedRooms).length > 0) {
            handleNext();
        } else {
            setErrorIndex(0); // Set error index if required fields are missing
        }
    };

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                House Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        What is your property type?
                    </Typography>
                    <Grid container spacing={2}>
                        {propertyTypes.map((option) => (
                            <Grid item xs={6} key={option.value}>
                                <Card
                                    sx={{
                                        border: selectedPropertyType === option.value ? '2px solid red' : 'none'
                                    }}
                                    onClick={() => handleSelectPropertyType(option.value)}
                                >
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography variant="h6" align="center">
                                                {option.label}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Is it a new or resale unit?
                    </Typography>
                    <Grid container spacing={2}>
                        {unitTypes.map((option) => (
                            <Grid item xs={6} key={option.value}>
                                <Card
                                    sx={{
                                        border: selectedUnitType === option.value ? '2px solid red' : 'none'
                                    }}
                                    onClick={() => handleSelectUnitType(option.value)}
                                >
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography variant="h6" align="center">
                                                {option.label}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Choose the rooms you want to renovate
                    </Typography>
                    <Grid container spacing={2}>
                        {rooms.map((room) => (
                            <Grid item xs={12} key={room.value}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h6">{room.label}</Typography>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <IconButton onClick={() => handleRoomChange(room.value, -1)} color="error">
                                            <RemoveCircleOutline />
                                        </IconButton>
                                        <Typography variant="body1">{selectedRooms[room.value] || 0}</Typography>
                                        <IconButton onClick={() => handleRoomChange(room.value, 1)} color="primary">
                                            <AddCircleOutline />
                                        </IconButton>
                                    </Stack>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="flex-end">
                        <AnimateButton>
                            <Button variant="contained" sx={{ my: 3, ml: 1 }} onClick={handleSubmit}>
                                Next
                            </Button>
                        </AnimateButton>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

HouseDetail.propTypes = {
    shippingData: PropTypes.object,
    setShippingData: PropTypes.func,
    handleNext: PropTypes.func,
    setErrorIndex: PropTypes.func
};

export default HouseDetail;
