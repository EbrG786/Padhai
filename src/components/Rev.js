import React from 'react'
import { Box,Text,Avatar } from '@chakra-ui/react'

function Rev(props) {
  return (
    <div>
    <Box
            w='300px'
            h='370px'
            textAlign='center'
            borderRadius='15px'
            px='2%'>
                <Avatar
                mt='20px'
                size='3xl'
                mx='auto'
                name='Prosper Otemuyiwa'
                src={props.image}
                />
                <Text w='100%' mt='30px'
                        fontSize='25px'
                        lineHeight='30px'
                        textAlign='center'
                        mx={['auto']}> <span style={{ 'color': '#3071E7', 'fontWeight': '700' }} >{props.name}</span></Text>
                <Text w='100%' mt='10px'
                        fontSize='20px'
                        lineHeight='30px'
                        textAlign='center'
                        mx={['auto']}>{props.country}</Text>
                <Text w='100%' mt='10px'
                        fontSize='15px'
                        lineHeight='30px'
                        textAlign='center'
                        mx={['auto']}><span style={{'fontWeight': '900' }}>"</span>{props.info}<span style={{'fontWeight': '900' }}>"</span></Text>
            </Box>
        </div>
  )
}

export default Rev