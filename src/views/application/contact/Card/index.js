import { useEffect, useState, Fragment } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material';

// third-party
import { isEmpty } from 'lodash';

// project imports
import UserDetails from '../UserDetails';
import UserEdit from '../UserEdit';
import ContactCard from 'ui-component/cards/ContactCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import User1 from 'assets/images/users/avatar-1.png';

import { useDispatch, useSelector } from 'store';
import { getContacts, modifyContact } from 'store/slices/contact';

// assets
import { IconSearch } from '@tabler/icons';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

// ==============================|| CONTACT CARD ||============================== //

const ContactCardPage = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [user, setUser] = useState({});
    const [data, setData] = useState({});

    // get all users details
    const { contacts } = useSelector((state) => state.contact);
    const convertData = (userData) =>
        userData.reduce((a, curr) => {
            const firstLetter = curr.name[0]?.toUpperCase();
            if (Object.prototype.hasOwnProperty.call(a, firstLetter)) {
                a[firstLetter].push(curr);
            } else {
                a[firstLetter] = [curr];
            }
            return a;
        }, {});

    useEffect(() => {
        setData(convertData(contacts));
        if (!isEmpty(user)) {
            const idx = contacts.findIndex((item) => item.id === user.id);
            if (idx > -1) setUser(contacts[idx]);
        }
    }, [contacts, user]);

    useEffect(() => {
        dispatch(getContacts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // edit selected user and modify users data
    const modifyUser = async (u) => {
        await dispatch(modifyContact(u));
    };

    // handle new user insert action
    const [userDetails, setUserDetails] = useState(false);
    const [userEdit, setUserEdit] = useState(false);
    const handleOnAdd = () => {
        setUser({
            name: '',
            company: '',
            role: '',
            work_email: '',
            personal_email: '',
            work_phone: '',
            personal_phone: '',
            location: 'USA',
            image: User1,
            status: 'I am online',
            lastMessage: '2h ago',
            birthdayText: ''
        });
        setUserDetails(false);
        setUserEdit(true);
    };

    return (
        <MainCard title="Contact Cards">
            <Grid container spacing={gridSpacing}>
                <Grid
                    className="block"
                    item
                    xs
                    zeroMinWidth
                    sx={{
                        display: userDetails || userEdit ? { xs: 'none', md: 'flex' } : 'flex'
                    }}
                >
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item xs zeroMinWidth>
                            <OutlinedInput
                                id="input-search-card-style1"
                                placeholder="Search Contact"
                                fullWidth
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconSearch stroke={1.5} size="16px" />
                                    </InputAdornment>
                                }
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" size="large" startIcon={<AddCircleOutlineOutlinedIcon />} onClick={handleOnAdd}>
                                Add
                            </Button>
                        </Grid>

                        {Object.keys(data).map((key, index) => (
                            <Fragment key={index}>
                                <Grid item xs={12}>
                                    <Divider
                                        sx={{
                                            borderColor: theme.palette.primary.light,
                                            mt: 0.625,
                                            mb: 1.875
                                        }}
                                    />
                                    <Typography variant="h4" color="primary" sx={{ fontSize: '1rem' }}>
                                        {key.toUpperCase()}
                                    </Typography>
                                    <Divider
                                        sx={{
                                            borderColor: theme.palette.primary.light,
                                            mt: 1.875,
                                            mb: 0.625
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container direction="row" spacing={gridSpacing}>
                                        {data[key].map((userRow, i) => (
                                            <Grid item xs={12} md={userEdit ? 12 : 6} lg={userEdit ? 6 : 4} xl={3} key={i}>
                                                <ContactCard
                                                    avatar={userRow.avatar}
                                                    name={userRow.name}
                                                    role={userRow.role}
                                                    email={userRow.work_email}
                                                    contact={userRow.phone}
                                                    location={userRow.location}
                                                    onActive={() => {
                                                        setUser(userRow);
                                                        setUserDetails(true);
                                                        setUserEdit(false);
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Fragment>
                        ))}
                    </Grid>
                </Grid>

                {userDetails && (
                    <Grid item sx={{ width: 342, margin: { xs: '0 auto', md: 'initial' } }}>
                        <UserDetails
                            user={user}
                            onEditClick={() => {
                                setUserDetails(false);
                                setUserEdit(true);
                            }}
                            onClose={() => {
                                setUserDetails(false);
                                setUserEdit(false);
                            }}
                        />
                    </Grid>
                )}

                {userEdit && (
                    <Grid item sx={{ width: 342, margin: { xs: '0 auto', md: 'initial' } }}>
                        <UserEdit
                            user={user}
                            onSave={(u) => {
                                if (u.id) setUserDetails(true);
                                setUserEdit(false);
                                modifyUser(u);
                            }}
                            onCancel={(u) => {
                                if (u.id) setUserDetails(true);
                                setUserEdit(false);
                            }}
                        />
                    </Grid>
                )}
            </Grid>
        </MainCard>
    );
};

export default ContactCardPage;
