import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import img1 from '../components/ntt_data.png';
import img_triporate from '../components/triporate.png';
import Tappable from 'react-tappable/lib/Tappable'
import img3 from '../components/tesi.png';



class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialogNTT: false,
            openDialogTrip: false,
            openDialogTesi: false,




            activeTab: 0
        }



    }
    showDialog = (openDialogNTT, openDialogTrip, openDialogTesi) => {
        if (openDialogNTT === true && openDialogTrip === false && openDialogTesi === false) {
            return (
                (
                    <dialog open
                        className="modal"


                        onClick={this.handleShowDialogNTT}
                    >
                        <img src={img1} alt="ntt data" height="370px" width="480px" onClick={this.handleShowDialogNTT} />
                    </dialog>
                )
            )

        } else if (openDialogNTT === false && openDialogTrip === true && openDialogTesi === false) {
            return (
                (
                    <dialog
                        open
                        className="modal"


                        onClick={this.handleShowDialogTrip}
                    >
                        <img src={img_triporate} alt="triporate" height="370px" width="480px" onClick={this.handleShowDialogTrip} />
                    </dialog>
                )

            )

        } else if (openDialogNTT === false && openDialogTrip === false && openDialogTesi === true) {
            return (
                (
                    <dialog
                        open
                        className="modal"


                        onClick={this.handleShowDialogTesi}
                    >
                        <img src={img3} alt="triporate" height="370px" width="480px" onClick={this.handleShowDialogTesi} />
                    </dialog>
                )
            )

        }
    }


    handleShowDialogNTT = () => {
        this.setState({ openDialogNTT: !this.state.openDialogNTT });
        console.log('cliked');
    };
    handleShowDialogTrip = () => {
        this.setState({ openDialogTrip: !this.state.openDialogTrip });
        console.log('cliked');
    };

    handleShowDialogTesi = () => {
        this.setState({ openDialogTesi: !this.state.openDialogTesi });
        console.log('cliked');
    };

    setBooleanJava = () => {
        if (this.state.openDialogTesi === true) {
            this.setState({ openDialogTesi: false })
        }
    }
    setBooleanReact = () => {
        if (this.state.openDialogNTT === true) {
            this.setState({ openDialogNTT: false })
        } if (this.state.openDialogTrip === true) {
            this.setState({ openDialogTrip: false })
        }
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            this.setBooleanJava();
            return (
                <div className="projects-grid"  >
                    <Card shadow={5} >
                        <Tappable onTap={this.handleShowDialogNTT} style={{ cursor: 'pointer' }}><CardTitle className="mdl-card__title_ntt" style={{ backgroundColor: 'rgb(33, 33, 40)', height: '176px', cursor: 'pointer' }}></CardTitle></Tappable>
                        <CardText><h4 style={{ color: '#da7c18', fontFamily: 'Roboto Mono,monospace' }}>NTT DATA</h4>Me and my companios had the opporunity to work with NTT DATA
                        increasing an application for a prestigious client company.</CardText>
                        <Tappable onTap={() => window.open('https://github.com/nicomontale/leroyMerlin-wizard', "_blank")}>   <CardActions style={{ backgroundColor: '  #da7c18' }}>
                            <Button style={{ color: '  10px solid black' }}>GitHub</Button>

                        </CardActions></Tappable>
                        <CardMenu style={{ color: '#fff' }}>

                            <Tappable onTap={this.handleShowDialogNTT} style={{ cursor: 'pointer' }}><IconButton className="clickable" name="photo" style={{ color: '#da7c18', width: '58px', height: '58px', minWidth: 'initial', cursor: 'pointer' }} /></Tappable>








                        </CardMenu>
                    </Card>




                    <Card shadow={5} >
                        <Tappable onTap={this.handleShowDialogTrip} style={{ cursor: 'pointer' }}><CardTitle className="mdl-card__title_triporate" style={{ backgroundColor: 'rgb(33, 33, 40)', height: '176px', cursor: 'pointer' }}></CardTitle></Tappable>
                        <CardText><h4 style={{ color: '#da7c18', fontFamily: 'Roboto Mono,monospace' }}>TRIPORATE</h4>Triporate is a company that searches to simplify work-related traveling, providing a full service of ticket and accommodation purchase. This project is a multiplatform solution for the viewing of plane, train and bus tickets, giving the user the possibility of having all of his boarding passes in one digital Wallet, without the need of downloading additional apps or files.  </CardText>
                        <Tappable onTap={() => window.open('https://github.com/nicomontale/ProjectTriporateEnd', "_blank")}>   <CardActions style={{ backgroundColor: '  #da7c18' }}>
                            <Button style={{ color: '  10px solid black' }}>GitHub</Button>

                        </CardActions></Tappable>
                        <CardMenu style={{ color: '#fff' }}>
                            <Tappable onTap={this.handleShowDialogTrip} style={{ cursor: 'pointer' }}><IconButton className="clickable" name="photo" style={{ color: '#da7c18', width: '65px', height: '65px', cursor: 'pointer' }} /></Tappable>





                        </CardMenu>
                    </Card>

                    <Card shadow={5}>
                        <CardTitle className="mdl-card__title_e_commerce" style={{ color: '#fff', height: '176px'}}></CardTitle>
                        <CardText><h4 style={{ color: '#da7c18', fontFamily: 'Roboto Mono,monospace' }}>E-COMMERCE STORE</h4> Demo: e-commerce site for a skateshop.  <br></br>Built with React js.<br></br>
                      Go to my Instagram account to see my frontend projects<a style={{ color: '#da7c18' }} href="https://www.instagram.com/nicola.montaleone/?hl=it"> here</a> </CardText>
                        <Tappable onTap={() => window.open('https://github.com/nicomontale', "_blank")}>   <CardActions style={{ backgroundColor: '  #da7c18' }}>
                            <Button style={{ color: '  10px solid black' }}>GitHub</Button>

                        </CardActions></Tappable>
                        <CardMenu style={{ color: '#fff' }} >
                           <a href="www.facebook.com"><IconButton className="clickable" name="shop" style={{ color: '#da7c18', width: '58px', height: '58px', minWidth: 'initial', cursor: 'pointer' }} /></a> 

                        </CardMenu>
                    </Card>

                </div>







            )
        } else if (this.state.activeTab === 1) {
            this.setBooleanReact();
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <Tappable onTap={this.handleShowDialogTesi} style={{ cursor: 'pointer' }}><CardTitle className="mdl-card__title_tesi" style={{ backgroundColor: 'rgb(33, 33, 40)', height: '306px', cursor: 'pointer' }}></CardTitle></Tappable>
                        <CardText ><h4 style={{ color: '#da7c18', fontFamily: 'Roboto Mono,monospace' }}>THESIS:COMPANY MANAGEMENT</h4>
                            The application allows you to provide a timely analysis regarding the work of the technician throughout 2018, in particular starting from accounting data, it will be possible to derive values ​​aimed at capturing the critical and optimal factors of the technicians and then carrying out training team. </CardText>
                        <CardActions style={{ backgroundColor: '  #da7c18' }}>
                            <Button style={{ color: '  10px solid black' }} onClick={() => window.open('https://github.com/nicomontale/MontaleoneNicola', "_blank")} >GitHub</Button>
                            <Button style={{ color: '  10px solid black' }} onClick={() => window.open('https://www.youtube.com/watch?v=P-b95WS-11M', "_blank")}>Youtube</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <Tappable onTap={this.handleShowDialogTesi} style={{ cursor: 'pointer' }}><IconButton className="clickable" name="photo" style={{ color: '#da7c18', width: '58px', height: '58px', minWidth: 'initial', cursor: 'pointer' }} /> </Tappable>


                        </CardMenu>
                    </Card>





                </div>
            )
        }
    }

    render() {
        const { openDialogNTT, openDialogTesi, openDialogTrip } = this.state;
        return (
            <div className="category-tabs"  >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab >React</Tab>
                    <Tab>Java</Tab>



                </Tabs>
                {this.showDialog(openDialogNTT, openDialogTrip, openDialogTesi)}
                <section>

                    <Grid >
                        <Cell col={12} >
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>


            </div>
        )
    }
}
export default Project;