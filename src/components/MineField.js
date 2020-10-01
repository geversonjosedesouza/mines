import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

import Field from './Fields'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field
                {...field}
                key={c}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={e => props.onSelectField(r, c)}
            />
        })
        return <View
            style={styles.linhas}
            key={r}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    },
    linhas: {
        flexDirection: 'row'
    }
})