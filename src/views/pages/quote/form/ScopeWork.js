import PropTypes from 'prop-types';
import React, { useState } from 'react';

// material-ui
import { Button, Checkbox, FormControlLabel, Grid, Stack, Typography, Box, Card, CardContent, Tabs, Tab } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

export default function ScopeWork({ handleNext, handleBack, setErrorIndex }) {
    const [expanded, setExpanded] = useState({ card1: false, card2: false, card3: false });
    const [tabValues, setTabValues] = useState({ card1: 1, card2: 1, card3: 1 }); // Default to "Moderate"

    const handleCheckboxChange = (card) => (event) => {
        setExpanded((prevExpanded) => ({ ...prevExpanded, [card]: event.target.checked }));
    };

    const handleTabChange = (card) => (event, newValue) => {
        setTabValues((prevTabValues) => ({ ...prevTabValues, [card]: newValue }));
    };

    const handleNextClick = () => {
        setErrorIndex(1);
        if (handleNext) {
            handleNext();
        }
    };

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Living room works
            </Typography>
            <form>
                <Grid container spacing={3}>
                    {/* First Card */}
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardContent>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={expanded.card1} onChange={handleCheckboxChange('card1')} color="secondary" />
                                    }
                                    label="Carpentry"
                                />
                                {expanded.card1 && (
                                    <Box sx={{ mt: 2 }}>
                                        <Tabs
                                            value={tabValues.card1}
                                            onChange={handleTabChange('card1')}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            centered
                                        >
                                            <Tab label="Light" value={0} />
                                            <Tab label="Moderate" value={1} />
                                            <Tab label="Extensive" value={2} />
                                        </Tabs>

                                        <Box sx={{ p: 2 }}>
                                            {tabValues.card1 === 0 && <Typography variant="body2">Light work description.</Typography>}
                                            {tabValues.card1 === 1 && (
                                                <Typography variant="body2">
                                                    Plaster ceiling (plain design), L box/cove light holder, curtain pelmet
                                                </Typography>
                                            )}
                                            {tabValues.card1 === 2 && <Typography variant="body2">Extensive work description.</Typography>}
                                        </Box>

                                        <Typography variant="h6" sx={{ mt: 2 }}>
                                            APPROX BUDGET: SGD 1600 - SGD 2100
                                        </Typography>
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Second Card */}
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardContent>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={expanded.card2} onChange={handleCheckboxChange('card2')} color="secondary" />
                                    }
                                    label="Ceiling and Partition"
                                />

                                {expanded.card2 && (
                                    <Box sx={{ mt: 2 }}>
                                        <Tabs
                                            value={tabValues.card2}
                                            onChange={handleTabChange('card2')}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            centered
                                        >
                                            <Tab label="Light" value={0} />
                                            <Tab label="Moderate" value={1} />
                                            <Tab label="Extensive" value={2} />
                                        </Tabs>

                                        <Box sx={{ p: 2 }}>
                                            {tabValues.card2 === 0 && <Typography variant="body2">Light work description.</Typography>}
                                            {tabValues.card2 === 1 && (
                                                <Typography variant="body2">
                                                    Plaster ceiling (plain design), L box/cove light holder, curtain pelmet
                                                </Typography>
                                            )}
                                            {tabValues.card2 === 2 && <Typography variant="body2">Extensive work description.</Typography>}
                                        </Box>

                                        <Typography variant="h6" sx={{ mt: 2 }}>
                                            APPROX BUDGET: SGD 1600 - SGD 2100
                                        </Typography>
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Third Card */}
                    <Grid item xs={12}>
                        <Card variant="outlined">
                            <CardContent>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={expanded.card3} onChange={handleCheckboxChange('card3')} color="secondary" />
                                    }
                                    label="Flooring Works"
                                />
                                {expanded.card3 && (
                                    <Box sx={{ mt: 2 }}>
                                        <Tabs
                                            value={tabValues.card3}
                                            onChange={handleTabChange('card3')}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            centered
                                        >
                                            <Tab label="Light" value={0} />
                                            <Tab label="Moderate" value={1} />
                                            <Tab label="Extensive" value={2} />
                                        </Tabs>

                                        <Box sx={{ p: 2 }}>
                                            {tabValues.card3 === 0 && <Typography variant="body2">Light work description.</Typography>}
                                            {tabValues.card3 === 1 && <Typography variant="body2">Moderate work description.</Typography>}
                                            {tabValues.card3 === 2 && <Typography variant="body2">Extensive work description.</Typography>}
                                        </Box>

                                        <Typography variant="h6" sx={{ mt: 2 }}>
                                            APPROX BUDGET: SGD 1600 - SGD 2100
                                        </Typography>
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Navigation Buttons */}
                    <Grid item xs={12}>
                        <Stack direction="row" justifyContent="space-between">
                            <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                                Back
                            </Button>
                            <AnimateButton>
                                <Button variant="contained" sx={{ my: 3, ml: 1 }} onClick={handleNextClick}>
                                    Next
                                </Button>
                            </AnimateButton>
                        </Stack>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

ScopeWork.propTypes = {
    handleNext: PropTypes.func,
    handleBack: PropTypes.func,
    setErrorIndex: PropTypes.func
};
