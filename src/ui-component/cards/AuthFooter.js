// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://webspidy.in" target="_blank" underline="hover">
            webspidy.in
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://webspidy.in" target="_blank" underline="hover">
            &copy; webspidy.in
        </Typography>
    </Stack>
);

export default AuthFooter;
