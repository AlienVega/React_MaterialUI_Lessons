import "./App.css";
import LessonDefaultThema from "./components/LessonDefaultThema";
// import LessonTimeLıne from "./components/LessonTimeLıne";
// import LessonMasonry from "./components/LessonMasonry";
// import { LessonDateRange } from "./components/LessonDateRange";
// import LessonTabs from "./components/LessonTabs";

// import LessonLoadingButton from "./components/LessonLoadingButton";
// import LessonTable from "./components/LessonTable";
// import LessonSkeleton from "./components/LessonSkeleton";
// import LessonProgress from "./components/LessonProgress";
// import LessonSnackbar from "./components/LessonSnackbar";
// import LessonDialog from "./components/LessonDialog";
// import LessonAvatar from "./components/LessonAvatar";
// import LessonList from "./components/LessonList";
// import LessonBottomNavigation from "./components/LessonBottomNavigation";
// import LessonBadge from "./components/LessonBadge";
// import LessonSpeedDıal from "./components/LessonSpeedDıal";
// import LessonBreadcrumbs from "./components/LessonBreadcrumbs";
// import LessonDrawer from "./components/LessonDrawer";
// import LessonAccordion from "./components/LessonAccordion";
// import LessonAppBar from "./components/LessonAppBar";
// import LessonImageList from "./components/LessonImageList";
// import LessonLink from "./components/LessonLink";
// import LessonPaper from "./components/LessonPaper";
// import LessonCard from "./components/LessonCard";
// import LessonGrid from "./components/LessonGrid";
// // import LessonAutoComplete from "./components/LessonAutoComplete";
// // import LessonBox from "./components/LessonBox";
// import LessonStack from "./components/LessonStack";
// import LessonCheckBox from "./components/LessonCheckBox";
// import LessonSelect from "./components/LessonSelect";
// import LessonRadiExample from "./components/LessonRadiExample";
// import LessonRadioGroup from "./components/LessonRadioGroup";
// import LessonButton from "./components/LessonButton";
// import { LessonButtonGroup } from "./components/LessonButtonGroup";
// import LessonText from "./components/LessonText";
// import { LessonTypography } from "./components/LessonTypography";
import { createTheme, colors, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    secondary: {
      main: colors.brown[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      <>
        {/* <LessonTypography /> */}
        {/* <LessonButton /> */}
        {/* <LessonButtonGroup /> */}
        {/* <LessonText /> */}
        {/* <LessonRadioGroup /> */}
        {/* <LessonRadiExample /> */}
        {/* <LessonSelect /> */}
        {/* <LessonCheckBox /> */}
        {/* <LessonAutoComplete /> */}
        {/* <LessonBox /> */}
        {/* <LessonStack /> */}
        {/* <LessonGrid /> */}
        {/* <LessonCard /> */}
        {/* <LessonAccordion /> */}
        {/* <LessonAppBar /> */}
        {/* <LessonImageList /> */}
        {/* <LessonPaper /> */}
        {/* <LessonLink /> */}
        {/* <LessonBreadcrumbs /> */}
        {/* <LessonDrawer /> */}
        {/* <LessonBadge /> */}
        {/* <LessonSpeedDıal /> */}
        {/* <LessonBottomNavigation /> */}
        {/* <LessonAvatar /> */}
        {/* <LessonList /> */}
        {/* <LessonDialog /> */}
        {/* <LessonSnackbar /> */}
        {/* <LessonProgress /> */}
        {/* <LessonSkeleton /> */}
        {/* <LessonLoadingButton /> */}
        {/* <LessonTable /> */}
        {/* <LessonDateRange /> */}
        {/* <LessonTabs /> */}
        {/* <LessonMasonry /> */}
        {/* <LessonTimeLıne /> */}
        <LessonDefaultThema />
      </>
    </ThemeProvider>
  );
}

export default App;
