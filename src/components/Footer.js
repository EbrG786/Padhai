import React from 'react'
import fb from '../assets/fb.svg'
import logo from '../assets/logo.svg'
import blb from '../assets/blb.svg'
import lnk from '../assets/lnk.svg'
import twt from '../assets/twt.svg'
import { Box, Flex, Text, Image,Grid } from '@chakra-ui/react'

function Footer() {
  return (
    <>
        <Box w='100%'
            h={['100%', '100%', '40vh', '40vh']}
            overflow='hidden'>
            <Box
                    w='400px'
                    h='100px'
                    float='left'
                    ml='3%' mt='4%'>
                    <Image boxSize='100%' src={logo} fallbackSrc='https://via.placeholder.com/150' />
                </Box>
                <Text w='100%' mt='20px'
                        fontSize='30px'
                        lineHeight='30px'
                        textAlign='center'
                        mx={['auto']}>Contact Us</Text>
                <Grid templateColumns={['auto', 'auto', 'auto auto', 'auto auto auto']} placeItems='center' gap={3}>
                <Text w='100%' mt='20px'
                        fontSize='20px'
                        lineHeight='30px'
                        textAlign='center'
                        mx={['auto']}>padhai.org@email.com</Text>
                <Text w='100%' mt='20px'
                        fontSize='20px'
                        lineHeight='30px'
                        textAlign='center'
                        mx={['auto']}><span style={{'fontWeight': '600' }} >+91 94342 45XXX<br />+91 96896 04XXX</span></Text>
                </Grid>
        </Box>
    </>
  )
}

export default Footer