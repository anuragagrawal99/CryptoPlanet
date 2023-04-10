//  Importing Components from Material UI
import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";

//  CSS of our Heading
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

// Adding Dark Theme to our WebApp
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency, user } = CryptoState();

  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        {/* Container helps in making our webapp responsive */}
        <Container>
          <Toolbar>
            <Typography
              // For redirecting to homepage
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              CryptoPlanet
            </Typography>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 85, height: 40 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>U$D </MenuItem>
              <MenuItem value={"INR"}>IN₹</MenuItem>
            </Select>

            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
