import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Footer from "../pages/footer";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Footer">
                <Footer/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews