import Meme from './Meme.js'
import Clicker from './Clicker.js'

import miniLogo from '../assets/mini-logo.png'
import memesData from '../memesData.js'
import React from 'react'


const Hero = () => {

    const randomMeme = () => {
        // from the meme set, get a random entry:
        const rando = Math.trunc(( memesData.data.memes.length ) * Math.random() )
        const singleMeme = memesData.data.memes[rando]

        return singleMeme.url
    }

    // set initial states
    const [meme, setMeme] = React.useState(randomMeme)
    // sets state for input boxes
    const [topPhrase, setTopPhrase] = React.useState('')
    const [bottomPhrase, setBottomPhrase] = React.useState('')
    //


    // run this when the purple button is clicked
    const changePhoto = () => {
        setMeme(randomMeme)
    }
    // states for active typing
    const typingTop = function(event) {
        setTopPhrase( prevState => event.target.value )
    }
    const typingBottom = function(event) {
        setBottomPhrase( prevState => event.target.value )
    }
    
    // sets state for absolute position of rendered text
    const [topPosition, setTopPosition] = React.useState({top: 0, left: 50})
    const [bottomPosition, setBottomPosition] = React.useState({bottom: 10, left: 50})
  
    // function for clicker
    const updateClicker = function(event) {

        if ( event.target.id === 'top-clicker--up') {
            setTopPosition(prevValue => {
                return {...prevValue, top:(prevValue.top - 5) }
            })
        }
        else if ( event.target.id === 'top-clicker--down') {
            setTopPosition(prevValue => {
                return {...prevValue, top:(prevValue.top + 5) }
            })
        }
        else if ( event.target.id === 'top-clicker--left') {
            setTopPosition(prevValue => {
                return {...prevValue, left:(prevValue.left - 5) }
            })
        }
        else if ( event.target.id === 'top-clicker--right') {
            setTopPosition(prevValue => {
                return {...prevValue, left:(prevValue.left + 5) }
            })
        }
        else if ( event.target.id === 'bottom-clicker--up') {
            setBottomPosition(prevValue => {
                return {...prevValue, bottom:(prevValue.bottom - 5) }
            })
        }
        else if ( event.target.id === 'bottom-clicker--down') {
            setBottomPosition(prevValue => {
                return {...prevValue, bottom:(prevValue.bottom + 5) }
            })
        }
        else if ( event.target.id === 'bottom-clicker--left') {
            setBottomPosition(prevValue => {
                return {...prevValue, left:(prevValue.left - 5) }
            })
        }
        else if ( event.target.id === 'bottom-clicker--right') {
            setBottomPosition(prevValue => {
                return {...prevValue, left:(prevValue.left + 5) }
            })
        }
        
    }

    return (

    <div className='hero--container'>

        <div>
            <section className='input--container'>
                <input 
                className='input--style' 
                id="input--top-phrase" 
                type='text' 
                placeholder='top phrase'
                onChange={typingTop}
                />
                <input 
                className='input--style' 
                id="input--bottom-phrase" 
                type='text' 
                placeholder='bottom phrase'
                onChange={typingBottom}
                />
                
            </section>

            <section className='arrow--container'>
                <div className='input--clicker'>
                    <button onClick={updateClicker} className='clicker--btn-topPhrase' id='top-clicker--up'>UP</button>
                    <button onClick={updateClicker} className='clicker--btn-topPhrase' id='top-clicker--down'>DOWN</button>
                    <button onClick={updateClicker} className='clicker--btn-topPhrase' id='top-clicker--left'>LEFT</button>
                    <button onClick={updateClicker} className='clicker--btn-topPhrase' id='top-clicker--right'>RIGHT</button>
                </div>

                <span className='input--special'>{`<------ position your text ------>`}</span>

                <div className='input--clicker'>
                    <button onClick={updateClicker} className='clicker--btn-bottomPhrase' id='bottom-clicker--up'>UP</button>
                    <button onClick={updateClicker} className='clicker--btn-bottomPhrase' id='bottom-clicker--down'>DOWN</button>
                    <button onClick={updateClicker} className='clicker--btn-bottomPhrase' id='bottom-clicker--left'>LEFT</button>
                    <button onClick={updateClicker} className='clicker--btn-bottomPhrase' id='bottom-clicker--right'>RIGHT</button>
                </div>

            </section>
            
            <div 
            id='btn--submit-purple' 
            onClick={changePhoto}>
                <span className='btn-submit-purple'>Get a new meme </span>
                <img 
                src={miniLogo} 
                alt='misc clip art logo' />
            </div>

            <div 
            className='meme--container' 
            >
                <img src={meme} />

                <section className='meme--text-possition'>
                    <h2 
                    id='topText' 
                    style={{top:`${topPosition.top}%`, left:`${topPosition.left}%`}}>
                        {topPhrase}
                    </h2>

                    <h2 
                    id='bottomText' 
                    style={{top:`${bottomPosition.bottom}%`, left:`${bottomPosition.left}%`}}>
                        {bottomPhrase}
                    </h2>
                </section>


            </div>
        </div>
    </div>
  )
}

export default Hero