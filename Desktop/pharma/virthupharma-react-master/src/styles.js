import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#ffffff",
        },
    },
});

export const styles = (theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        padding: 20,
        borderRadius: 5,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#ffffff',
    },
    //Layout styles >>>>>>>>>>>>>>
    mainLayout: {
        backgroundColor: "#ffffff",
    },
    //Add and View Image styles >>>>>>>>>>>>
    formControl: {
        width: "230px",
    },
    buttonWrapper: {
        marginTop: 10,
        marginBottom: 10,
    },
    imageDisplaySection: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-around",
        marginTop: 20,
        marginBottom: 20,
    },
    imageSection: {
        width: 350,
        marginBottom: 10,
    },
    imageBox: {
        height: "500px",
        width: "300px",
        objectFit: "fit",
    },
    imageTitle: {
        backgroundColor: "lightgrey",
        marginRight: "50px",
        paddingLeft: "20px",
        paddingTop: "5px",
        paddingBottom: "5px"
    },
    tools: {
        marginTop: "10px"
    },
    marginLeftLeft5: {
        marginLeft: "5px"
    },
    zommedImageBox: {
        position: "fixed",
        left: "25%",
        right: "25%",
        alignSelf: "center"
    },
    noteTitle: {
        color: "orange",
        display: "inline"
    },
    infoIcon: {
        marginTop: "5px"
    },
    displayInline: {
        display: "inline"
    },
    caseDescription: {
        width: '40%'
    },
    viewNextImage: {
        display: "flex",
        justifyContent: "flex-end"
    },
    //Registartion and Login style >>>>>>
    registrationForm: {
        textAlign: "center"
    },
    inputFieldSection: {
        width: 400,
        display: 'inline-block'
    },
    inputFields: {
        marginTop: 10,
        marginBottom: 10,
    },
    //MainBody styles >>>>>>>>>>
    mainBodyContainer: {
        // position: "relative",
        paddingLeft: 60,
        paddingTop: 10,
        paddingBottom: 10,
    },
    bodySubSection: {
        margin: 20,
        padding: 15,
        border: "solid",
        borderColor: "#e8eff9",
        borderWidth: 1,
    },
    //Navigation styles >>>>>>>>>>>>>>>
    navigationBar: {
    },
    logoSection: {
        display: 'flex',
        flexDirection: 'row-reverse',
        margin: 10,
        color: "#6548BC",
    },
    smallLogo: {
        height: 25,
        width: 25,
        margin: 8,
    },
    largeLogo: {
        height: 25,
        width: 25,
        margin: 8,
    },
    drawer: {
        width: 180,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        background: "#F3F4FD",
        border: "none",
        width: 180,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        background: "#F3F4FD",
        border: "none",
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: 58
    },
    navigationIconBar: {
        color: "#FFFFFF",
    },
    listIcon: {
        marginLeft: 2,
        marginRight: 17,
    },

    //Case styles >>>>>>>>>>
    caseContainer: {
        width: 350,
        marginBottom: 10,
    },
    caseTitle: {
        backgroundColor: "lightgrey",
        paddingLeft: "20px",
        paddingTop: "5px",
        paddingBottom: "5px"
    },
    descriptionContainer: {
        overflowWrap: "break-word",
        wordWrap: "break-word",
    },

    //Questions styles >>>>>
    inputCheckbox: {
        display: "inline-block",
        marginLeft: 50,
    },
    answerSection: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    optionTable: {
        marginTop: 20,
        width: 350,
        minWidth: 350,
    },
    questionImageDisplaySection: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    imageDescriptionContainer: {
        width: 300,
        overflowWrap: "break-word",
        wordWrap: "break-word",
        textAlign: "justify",
    },
    taskNoteSection: {
        marginTop: 200,
    },
    //File Upload Custom button styles >>>>>>
    customFileUploadButtonLabel: {
        border: "solid",
        borderWidth: 1,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 8,
        paddingBottom: 2,
        backgroundColor: "#ffffff",
    },
    customFileUploadButtonInput: {
        display: "none",
    },
})