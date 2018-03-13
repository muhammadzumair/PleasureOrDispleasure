import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content, Item, Input, Button, Icon, Text } from 'native-base';

class Comment extends Component {
    render(){
        const reasonImages = {
            sent: require('../assets/sent.png'),
            no: require('../assets/no.png')
        }
        return (
            <Container>
                <Content>
                    <Item style={{width:'95%', marginTop:30, alignSelf:'center'}} rounded>
                        <Input style={{width:70, height:200}} multiline={true} placeholder='Please Enter your Reviews Here....'/>
                         
                    </Item>
                    <Content>
                            <Button style={{alignSelf:'center', marginTop:20}} onPress={()=>this.props.navigation.navigate('ThankYou')} iconLeft rounded>
                                <Icon name='paper-plane' />
                                <Text>Send</Text>
                            </Button>
                    </Content>   
                </Content>
                
            </Container>
        );
    }
}

export default Comment;