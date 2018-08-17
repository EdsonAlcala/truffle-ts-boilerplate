pragma solidity ^0.4.24;

import "../lib/Ownable.sol";

contract Crowdsale is Ownable {
    uint public initialAmount2;

    constructor(uint _initialAmount) public {
        initialAmount2 = _initialAmount;
    }
}