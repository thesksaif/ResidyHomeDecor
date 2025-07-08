import { useState } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Collapse, Paper, Button } from '@mui/material';
import PropTypes from 'prop-types';

const bhkOptions = [
    { label: '1 BHK' },
    { label: '2 BHK', expandable: true },
    { label: '3 BHK', expandable: true },
    { label: '4 BHK', expandable: true },
    { label: '5 BHK+' }
];

const subOptions = [
    { label: 'Small', description: 'Below 1200 sq ft' },
    { label: 'Large', description: 'Above 1200 sq ft' }
];

const HouseDetail = ({ handleNext }) => {
    const [selectedBHK, setSelectedBHK] = useState('');
    const [expanded, setExpanded] = useState('');
    const [selectedSub, setSelectedSub] = useState('Small');

    const handleBHKChange = (event) => {
        setSelectedBHK(event.target.value);
        if (['2 BHK', '3 BHK', '4 BHK'].includes(event.target.value)) {
            setExpanded(event.target.value);
        } else {
            setExpanded('');
        }
    };

    return (
        <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
            <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                Select your BHK type
            </Typography>
            <Typography align="center" sx={{ color: 'text.secondary', mb: 3 }}>
                To know more about this, <span style={{ color: '#dc4545', cursor: 'pointer' }}>click here</span>
            </Typography>
            <FormControl component="fieldset" fullWidth>
                <RadioGroup value={selectedBHK} onChange={handleBHKChange}>
                    {bhkOptions.map((option) => (
                        <Box key={option.label} sx={{ mb: 2 }}>
                            <Paper
                                variant="outlined"
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: 'none',
                                    p: 1,
                                    borderColor: '#eee'
                                }}
                            >
                                <FormControlLabel
                                    value={option.label}
                                    control={<Radio color="error" />}
                                    label={<Typography sx={{ fontWeight: 500 }}>{option.label}</Typography>}
                                    sx={{ width: '100%', m: 0 }}
                                />
                                {option.expandable && (
                                    <Collapse in={expanded === option.label}>
                                        <Box sx={{ pl: 4, pb: 1, display: 'flex', gap: 2 }}>
                                            {subOptions.map((sub) => (
                                                <Paper
                                                    key={sub.label}
                                                    variant="outlined"
                                                    sx={{
                                                        borderColor:
                                                            selectedSub === sub.label && selectedBHK === option.label ? '#dc4545' : '#eee',
                                                        borderRadius: 2,
                                                        p: 2,
                                                        cursor: 'pointer',
                                                        background:
                                                            selectedSub === sub.label && selectedBHK === option.label ? '#fff5f5' : '#fff',
                                                        transition: 'all 0.2s',
                                                        flex: 1
                                                    }}
                                                    onClick={() => {
                                                        setSelectedBHK(option.label);
                                                        setSelectedSub(sub.label);
                                                    }}
                                                >
                                                    <Radio
                                                        checked={selectedSub === sub.label && selectedBHK === option.label}
                                                        color="error"
                                                        value={sub.label}
                                                        sx={{ p: 0, mr: 1 }}
                                                    />
                                                    <Typography sx={{ fontWeight: 500 }}>{sub.label}</Typography>
                                                    <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
                                                        {sub.description}
                                                    </Typography>
                                                </Paper>
                                            ))}
                                        </Box>
                                    </Collapse>
                                )}
                            </Paper>
                        </Box>
                    ))}
                </RadioGroup>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button variant="text" color="error" sx={{ fontWeight: 500 }} disabled>
                    BACK
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ fontWeight: 600, borderRadius: 8, px: 5 }}
                    onClick={handleNext}
                    disabled={!selectedBHK || (['2 BHK', '3 BHK', '4 BHK'].includes(selectedBHK) && !selectedSub)}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
};

HouseDetail.propTypes = {
    handleNext: PropTypes.func
};

export default HouseDetail;
