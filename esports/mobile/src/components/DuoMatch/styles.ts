import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.OVERLAY,
    },
    discord: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.MD,
    },
    content: {
        width: 311,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeIcon: {
        alignSelf: "flex-end",
        margin: 16,
    },
    label: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        marginTop: 24,
        marginBottom: 8, 
    },
    discordButton: {
        width: 231,
        height: 48,
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        marginBottom: 32,
    }
})