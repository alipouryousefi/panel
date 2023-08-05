import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";

const theme = createTheme({
  direction: 'rtl', 
  typography: {
    fontFamily: "Shabnam, sans-serif", 
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});


export { theme,cacheRtl};