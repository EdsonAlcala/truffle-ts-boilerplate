pragma solidity ^0.4.24;

import "../lib/Ownable.sol";

contract Crowdsale is Ownable {
    uint public initialAmount;

    constructor(uint _initialAmount) public {
        initialAmount = _initialAmount;
    }
}