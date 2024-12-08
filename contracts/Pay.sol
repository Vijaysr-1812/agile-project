// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Pay {
    address public owner;
    uint256 public balance;
    event PaymentReceived(address indexed sender, uint256 amount, uint256 timestamp);

    constructor() {
        owner = msg.sender;
    }

    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    
    function pay(uint256 requiredAmount) private {
        require(msg.value == requiredAmount, "Please pay the correct amount");
        balance += msg.value; 
        emit PaymentReceived(msg.sender, msg.value, block.timestamp); 
    }

    function firstHour() external payable {
        pay(10000 wei);
    }

    function secondHour() external payable {
        pay(20000 wei);
    }

    function thirdHour() external payable {
        pay(30000 wei);
    }

    function sixthHour() external payable {
        pay(60000 wei);
    }

    function Day() external payable {
        pay(120000 wei);
    }

    
    function getBalance() external view returns (uint256) {
        return balance;
    }
}
