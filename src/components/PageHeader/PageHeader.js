/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import landingpage from 'assets/pages/landingpage.png';
import pointsBackground from 'assets/pages/pointsBackground.png';

// reactstrap components
import { Container } from "reactstrap";

export function PageHeader() {
  return (
    <div style={{
      backgroundImage : `url(${landingpage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="page-header header-filter">
        <Container style={{
          top : '64%',
          fontFamily: 'bdr-mono, sans-serif',
          fontStyle: 'normal',
          fontWeight: '300',
        }}>
          <h3 style={{
            color : '#E36EF4',
          }}>UT AUSTIN</h3>
          <h1
            style={{
              fontSize: '80px',
              fontFamily : 'soleil, sans-serif',
              fontStyle : 'bold',
              fontWeight : 300,
              marginTop: '-15px',
              marginLeft: '-8px',
              color : '#ffffff'
            }} 
          >CS Week</h1>
          <h3 style={{
            color : '#E36EF4'
          }}>APRIL 8TH - APRIL 12TH</h3>
        </Container>
      </div>
    </div>
  );
}

export function PointsHeader() {
  return (
    <div style={{
      backgroundImage : `url(${pointsBackground})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="page-header header-filter">
        <Container style={{
          top : '40%',
          fontFamily: 'bdr-mono, sans-serif',
          fontStyle: 'normal',
          fontWeight: '300',
        }}>
          <h1
            style={{
              fontSize: '80px',
              fontFamily : 'soleil, sans-serif',
              fontStyle : 'bold',
              fontWeight : 300,
              marginTop: '-15px',
              marginLeft: '-8px',
              color : '#ffffff'
            }} 
          >Current Bits</h1>
          <h3 style={{color : '#E36EF4', marginLeft: '40px'}}>
            <font style={{color: '#FF9343'}}>• EVENTS </font><br />
            <font style={{color: '#1764FF'}}>• HOSTING </font><br />
            <font style={{color: '#42A560'}}>• SCAVENGER HUNT </font><br />
            <font style={{color: '#E36EF4'}}>• EXTRA EVENTS </font><br />
            <font style={{color: '#E54141'}}>• PARTICIPATION </font>
          </h3>
        </Container>
      </div>
    </div>
  );
}