
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import React from 'react'

const Welcome = () => {
    return (
        <ScreenWrapper>
            <Typo size={30} fontWeight={"700"} color='red'>Welcome Page</Typo>
        </ScreenWrapper>
    )
}

export default Welcome