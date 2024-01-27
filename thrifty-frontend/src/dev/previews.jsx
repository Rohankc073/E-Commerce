import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Footer from "../pages/footer";
import Signup from "../pages/signup";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Footer">
                <Footer/>
            </ComponentPreview>
            <ComponentPreview path="/Signup">
                <Signup/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews