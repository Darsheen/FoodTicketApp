import React from 'react';
import Progressbar from '../component/ProgressBar';
import Grid from "@mui/material/Grid";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import '../index.css'
export default function Graphics() {


    return (
        <div >
            <Grid container justifyContent="center" alignItems="flex-end" style={{ marginTop: "100px" }}>
                <Grid item xs={2} sm={1} md={1} >
                    <div style={{ textAlign: 'right' }}>
                        <span className='badge'>
                            <PersonAddAltIcon color="primary" />
                        </span>
                    </div>
                </Grid>
                <Grid item xs={2} sm={4} md={4}  >
                    <span className='textStyle'>
                        Adverse Effect &amp; contraindictations
                    </span>
                     <br />
                    <div style={{ width: '200px' }}>
                        <table id="graphicsTbl" style={{ width: '100%' }}>
                            <tr>
                                <td >546</td>
                                <td >
                                    <Progressbar direction='row' bgcolor1="blueviolet" bgcolor2="palevioletred" progress1='30' progress2='15' height={7} />
                                </td>
                            </tr>
                        </table>
                    </div>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="flex-end" style={{ marginTop: "40px" }}>
                <Grid item xs={10} sm={6} md={4} className='box'>
                    <table id="graphicsTbl">
                        <tr>
                            <td><Progressbar direction='column' bgcolor1="blueviolet" bgcolor2="palevioletred" progress1='50' progress2='50' height={70} /></td>
                            <td><Progressbar direction='column' bgcolor1="blueviolet" bgcolor2="palevioletred" progress1='90' progress2='10' height={70} /></td>
                            <td><Progressbar direction='column' bgcolor1="blueviolet" bgcolor2="palevioletred" progress1='30' progress2='70' height={70} /></td>
                            <td><Progressbar direction='column' bgcolor1="blueviolet" bgcolor2="palevioletred" progress1='30' progress2='70' height={70} /></td>
                            <td><Progressbar direction='column' bgcolor1="blueviolet" bgcolor2="palevioletred" progress1='40' progress2='60' height={70} /></td>
                            <td><Progressbar direction='column' bgcolor1="blueviolet" bgcolor2="palevioletred" progress1='20' progress2='80' height={70} /></td>
                            <td style={{ verticalAlign: 'top', paddingLeft: '20px' }}>
                                <span className='textStyle'>
                                    similarity measures between molecules
                                </span> <br></br>
                                125% &nbsp;
                                <span className='triangle'></span>
                                &nbsp;<span style={{ color: 'greenyellow', fontSize: '15px' }}>10%</span>
                            </td>
                        </tr>
                    </table>
                </Grid>
            </Grid>
        </div >
    )
}
