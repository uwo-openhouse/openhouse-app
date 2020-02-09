import React, {useState} from 'react';
import {
	ActionSheetIOS,
	Picker,
	Platform,
    StyleSheet,
    View
} from 'react-native';
import { Icon } from "react-native-elements";
import * as PropTypes from "prop-types";

import Colors from "../constants/Colors";

const AreaFilter = ({areas, filter, setFilter, noFilterName}) => {
    if (Platform.OS == 'ios') {
        const areaNames = areas.map(({name}) => {
            return name;
        });
        areaNames.unshift("Show All");

        return (
            <Icon 
            name="filter-list"
            size={30}
            color="#FFFFFF"
            underlayColor={Colors.westernPurple}
            onPress={()=> {
                ActionSheetIOS.showActionSheetWithOptions({
                    options: areaNames,
                },
                (clicked) => {
                    if (clicked == 0) {
                        setFilter(noFilterName);
                    }
                    else {
                        setFilter(areas[clicked-1].uuid);
                    }
                });
            }}
            />
        );
    }
    else {
        return (
            <View> 
                <Icon 
                    name="filter-list"
                    size={30}
                    color="#FFFFFF"
                    containerStyle={styles.pickerIcon}
                    underlayColor={Colors.westernPurple}>
                </Icon>
                <Picker
                    selectedValue={filter}
                    prompt="Filter"
                    mode="dialog"
                    style={styles.dropdown}
                    onValueChange={(value) => setFilter(value)}
                >
                    <Picker.Item value={noFilterName} label="Show All"/>
                    {areas.map(({uuid, name, color}) => (
                        <Picker.Item color={color} key={`filter-area-${uuid}`} value={uuid} label={name}/>
                    ))}
                </Picker>
            </View>
        );
    }
};

export default AreaFilter;

AreaFilter.propTypes = {
	areas: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			uuid: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
		}),
	),
	filter: PropTypes.string.isRequired,
	setFilter: PropTypes.func.isRequired,
	noFilterName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    dropdown: {
        flex: 1,
        width: 45,
        opacity: 0,
    },
    pickerIcon: {
        position: "absolute",
        top: 12,
        right: 10,
     }, 
});
