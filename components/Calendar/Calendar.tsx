import React from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { CalendarList, LocaleConfig } from 'react-native-calendars';

const CalendarModified = () => {

    LocaleConfig.locales['en'] = {
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Jan', 'Feb.', 'Mar', 'Apr', 'May', 'Jun', 'Jul.', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today: 'Today'
    };
    LocaleConfig.defaultLocale = 'en';

    return (

        <CalendarList
            theme={{
                calendarBackground: "transparent",
                textSectionTitleColor: "#ffffff",
                monthTextColor: "#ffffff",
                todayButtonTextColor: "#ffffff",
                textDayHeaderFontWeight: "bold",
                dayTextColor: '#ffffff',
                textDayFontWeight: 'bold'
            }}
            style={styles.calendar}
            horizontal={true}
        />
    )
}

export default CalendarModified

const styles = StyleSheet.create({
    calendar: {
        paddingTop: 20
    }
})