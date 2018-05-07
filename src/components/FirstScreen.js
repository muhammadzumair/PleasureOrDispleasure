import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { KeepAwake } from 'expo';
import { locationUpdate, selectLocation } from '../actions'
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;

class FirstScreen extends Component {
    render() {
        return (

            <Container>
                <KeepAwake />
                <StatusBar hidden={true} />
                <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Please Select Your Branch Location</Text>
                    <Form>
                        <Picker
                            style={{
                                color: '#616161',
                                backgroundColor: '#e2e2e2',
                                width: 250,
                                height: 50,
                                marginBottom:20,
                                marginTop:30
                            }}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.props.location}
                            onValueChange={value => this.props.locationUpdate({ prop: 'location', value })}
                        >
                            <Item label="Tariq Road" value="tariq-road" />
                            <Item label="Gulshan e Iqbal" value="gulshan-e-iqbal" />
                            <Item label="Nazimabad" value="nazimabad" />
                            <Item label="Askari" value="askari" />
                            <Item label="Clifton" value="clifton" />
                        </Picker>
                        <Button style={{alignSelf:'center'}} onPress={() => this.props.selectLocation({ prop: 'locationSelected', nav: this.props.navigation })}>
                            <Text>Next</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { location, locationSelected } = state.smiley;
    console.log(locationSelected)
    return { location };
}

export default connect(mapStateToProps, { selectLocation, locationUpdate })(FirstScreen);