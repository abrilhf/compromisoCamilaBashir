import { useEffect, useRef, useState } from "react"
import Form from '../component/Form'

function HomePage() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');

    
    let interval = useRef()
    
    const startTimer = () => {
      const countdownDate = new Date('June 10 2023 21:00:00 GMT-0300');

      interval = setInterval(()=> {
        const now = new Date();

        const distance = countdownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        if(distance < 0) {
          clearInterval(interval.current)
        } else {
          setTimerDays(days)
          setTimerHours(hours)
        }
        
      }, 1000)
    }
    useEffect(()=> {
      const someref = interval.current
      startTimer()
      return ()=> {
        clearInterval(someref)
      }
    }, [])

    return (
        <div className="container" style={
            {   
                backgroundImage: "url(/img/fondo.jpg)",
                backgroundSize: "cover",
                paddingLeft: "0"
            }
        }>
            <section className="titulo">
                <h1> 
                    <div className="deco">  
                        <span>Nos</span> 
                        <div className="linea">
                        </div> 
                    </div> 
                    Comprometemos </h1>
                
            <div className="fotoVector"></div>

                <div style={
                    {   
                        backgroundImage: "url(/img/flower-costado-foto.svg)",
                        height: "473px", 
                        width: "190px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left",
                        backgroundPositionX: "-40px",
                        backgroundPositionY: "184px",
                        position: "absolute",
                        zIndex: "1"

                    } 
                } >
                    
                </div>

                <div style={
                    {   
                        backgroundImage: "url(/img/bashirYcami.png)",
                        height: "473px", 
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right",
                        position: "relative"
                    }
                }>
                </div>
            
                <div style={
                    {
                        backgroundColor: "transparent",
                        height: "40px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left"
                    }
                }>

                </div>

                <div style={
                    {
                        backgroundImage: "url(/img/flower-debajo-foto.svg)",
                        height: "320px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right"
                    }
                }>

                </div>
            </section>

            <section className="iniciales">
                <h1>Camila</h1>
                <p>&</p>
                <h1 className="bashir">Bashir</h1>

                <div className="text-flowers">
                <p className="texto">¡Llego el momento de celebrar nuestro compromiso! Los esperamos para compartir juntos esta cena tan especial. </p>

                <div className="flowers-text">

                <div style={
                    {
                        backgroundImage: "url(/img/flower-text-left.svg)",
                        height: "62px",
                        width: "73px",
                        // backgroundRepeat: "no-repeat",
                        // backgroundPosition: "left",
                        // backgroundPositionX: "9px",
                        marginTop : "66px",

                    }
                }
                ></div>
                
                <div style={
                    {
                        backgroundImage: "url(/img/flower-text-right.svg)",
                        height: "62px",
                        width: "73px",
                        backgroundRepeat: "no-repeat",
                        // backgroundPosition: "right",
                        // backgroundPositionX: "9px",
                        marginTop : "66px",

                    }
                }
                ></div>
                
                </div>
                
                </div>
            </section>

            <section className="infoEvento">
            <div style={
                    {
                        height: "166px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left center",
                        backgroundImage: "url(/img/ramas-flores.svg)",
                        backgroundPosition: "center",
                        marginBottom: "30px",
                    }
                }>

                </div>

                <div style={{
                    backgroundImage: "url(/img/rama-marron.svg)",
                    height: "143px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                }}>

                <div style={{
                    backgroundImage: "url(/img/flower-superior-dias.svg)",
                    height: "207px",
                    width: "168px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left",
                    backgroundPositionX: "-54px"
                }}>

                </div>



                </div>

                <div className="container">
                    
                <div className="row">
                    <div className="col">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                        <h2>Día</h2>
                        <p>10/06</p>
                    </div>

                    <div className="col">
                    <ion-icon name="time-outline"></ion-icon>
                        <h2 className="horario">Horario</h2>
                        <p>20hs</p>
                    </div>
                    
                    <div className="col">
                        <div className="personas">
                    <ion-icon name="man-outline"></ion-icon>
                    <ion-icon name="woman-outline"></ion-icon>
                        </div>
                        <h2>Asistencia</h2>
                        <p>Elegante Sport</p>
                    </div>
                    </div>
                </div>

                <div style={{
                      backgroundImage: "url(/img/pintitas.svg)",
                      backgroundRepeat: "no-repeat",
                      height: "207px",
                      width: "168px",
                      backgroundPosition: "right",
                      backgroundPositionY: "-38px",
                      marginBottom: "-62px"
                }}>

                </div>

                <div style={{
                      backgroundImage: "url(/img/flower-asistencia-abajo.svg)",
                      backgroundRepeat: "no-repeat",
                      height: "223px",
                    //   width: "168px",
                      backgroundPosition: "right",
                      backgroundPositionX: "269px"
                }}>

                </div>

            </section>


            <section className="ubicacion">
            <ion-icon name="location-outline"></ion-icon>
                <h2>Estilo Campo</h2>
                <p>Av. Alicia Moreau de Justo 1840</p>
                <div>
                    <iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=es&amp;q=Estilo%20Campo,%20Buenos%20Aires+(Estilo%20Campo)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a></iframe>
                </div>

                <p className="mt-3">Valet parking incluido</p>

                <div style={{
                    backgroundImage: "url(/img/rama-contador-dias.svg)",
                    backgroundRepeat: "no-repeat",
                    height: "223px",
                    backgroundPosition: "left",
                    marginTop: "80px"
                }}></div>

            </section>


            <section className="contador">

                <p className="timer">{timerDays}</p>
                
                <div style={{
                      backgroundImage: "url(/img/ramo-contador.svg)",
                      backgroundRepeat: "no-repeat",
                      height: "144px",
                      backgroundSize:" 117px",
                      width:" 100%",
                      backgroundPositionX: "314px",
                }}><p className="dates">Días</p></div>
                <p className="timer">{timerHours}</p>
                <p className="dates">Horas</p>

                <div className="flowers-text">

                    <div style={
                        {
                            backgroundImage: "url(/img/flower-confirm-left.svg)",
                            height: "143px",
                            width: "90px",
                            backgroundRepeat: "no-repeat",
                            // backgroundPosition: "left",
                            // backgroundPositionX: "9px",
                            marginTop : "66px",

                        }
                    }
                    ></div>

                    <div style={
                        {
                            backgroundImage: "url(/img/flower-confirm.svg)",
                            height: "143px",
                            width: "115px",
                            backgroundRepeat: "no-repeat",
                            // backgroundPosition: "right",
                            // backgroundPositionX: "9px",
                            marginTop : "66px",

                        }
                    }
                    ></div>

                    </div>



            </section>


            <section className="confirmarAsis">
                <p>Podes confirmar tu asistencia hasta el <span>07/06</span> </p>
                <Form/>
            </section>
        </div>
    )
}

export default HomePage