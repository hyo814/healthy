import React, {Component} from "react";
import "./Header.css";
import { FiChevronDown } from "react-icons/fi";
import styled from 'styled-components';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Div>
                <div id="header">
                    <nav role="navigation">
                        <ul id="main-menu">
                            <h1 className="name"><a href="/">Healthy</a></h1>
                            <li><a href="#">Person&nbsp;<FiChevronDown/></a>
                                <ul id="sub-menu">
                                    <li><a href="/" aria-label="subemenu">환자정보</a></li>
                                    <li><a href="death" aria-label="subemenu">사망여부</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Filter&nbsp;<FiChevronDown/></a>
                                <ul id="sub-menu">
                                    <li><a href="arm" aria-label="subemenu">성별</a></li>
                                    <li><a href="shoulder" aria-label="subemenu">나이</a></li>
                                    <li><a href="lower_body" aria-label="subemenu">인종</a></li>
                                    <li><a href="chest" aria-label="subemenu">민족</a></li>
                                    <li><a href="back" aria-label="subemenu">사망여부</a></li>
                                </ul>
                            </li>
                            <li><a href="total">Total</a></li>
                            <li><a href="#">Chart&nbsp;<FiChevronDown/></a>
                                <ul id="sub-menu">
                                    <li><a href="gender" aria-label="subemenu"> 성별 </a></li>
                                    <li><a href="race" aria-label="subemenu"> 인종별 </a></li>
                                    <li><a href="ethnicity" aria-label="subemenu"> 민족별 </a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Div>
        );
    }
}

const Div = styled.div`
    text-align:center;
    width: auto;
    margin: 2% auto;
    `;

export default (Header);