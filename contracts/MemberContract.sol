/**
 *Submitted for verification at BscScan.com on 2021-11-03
*/

// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(_msgSender());
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint256);

    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

abstract contract ReentrancyGuard {
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        _status = _NOT_ENTERED;
    }
}

contract DecentralizedMembertorage is Ownable, ReentrancyGuard {

    IERC20 public token;
    address deadAddress = 0x000000000000000000000000000000000000dEaD;
    address vault = 0x000000000000000000000000000000000000dEaD;

    uint256 public membershipCosts = 1 * 10 ** 1;
    uint256 public votePrice = 1 * 10 ** 1;

    //Can block people from writing messages
    mapping(address => bool) public _isBlacklisted;
    mapping(address => MemberAttributeStruct) public MemberStoreStruct;
    address[] public entityList;

    struct MemberAttributeStruct {
        uint256 userName;
        bool isMember;
        bool isBlacklisted;
        uint256 timeOfMessage;
        uint256 timeEdited;
        uint256 feePaid;
        address messageSender;
        uint256 votesAvailable;
    }

    constructor(IERC20 _token) {
        token = _token;
    }

    function isBlacklisted(address requestedAddress) public view returns (bool isIndeed) {
        return MemberStoreStruct[requestedAddress].isBlacklisted;
    }

    function isMember(address requestedAddress) public view returns (bool isIndeed) {
        return MemberStoreStruct[requestedAddress].isMember;
    }

    function getUserNameByAddress(address requestedAddress) public view returns (uint256 isUsername) {
        return MemberStoreStruct[requestedAddress].userName;
    }

    function getTimeRegistered(address requestedAddress) public view returns (uint256 isTime) {
        return MemberStoreStruct[requestedAddress].timeOfMessage;
    }

    function getUserVotes(address requestedAddress) public view returns (uint256 isVotes) {
        return MemberStoreStruct[requestedAddress].votesAvailable;
    }

    function getMembersCount() public view returns (uint256 entityCount) {
        return entityList.length;
    }

    function getMembersFeePaid(address _requestedAddress) public view returns (uint256 _amount){
        return MemberStoreStruct[_requestedAddress].feePaid;
    }

    function getMembership() public nonReentrant {
        require(token.balanceOf(msg.sender) >= membershipCosts, "Need more tokens than you hold.");
        require(token.transferFrom(msg.sender, address(this), membershipCosts), "Entry failed due to failed transfer.");
        require(!isMember(msg.sender), "You are already a member");
        require(!_isBlacklisted[msg.sender], "You are Blacklisted");

        MemberStoreStruct[msg.sender].userName = getMembersCount();
        MemberStoreStruct[msg.sender].timeOfMessage = block.timestamp;
        MemberStoreStruct[msg.sender].messageSender = msg.sender;
        MemberStoreStruct[msg.sender].feePaid = membershipCosts;
        MemberStoreStruct[msg.sender].isMember = true;
        MemberStoreStruct[msg.sender].isBlacklisted = false;
        MemberStoreStruct[msg.sender].votesAvailable = 2;
        entityList.push(msg.sender);
    }

    function buyVotes(uint256 _amount) public nonReentrant {
        require(isMember(msg.sender), "You are not yet a member");
        require(!_isBlacklisted[msg.sender], "You are Blacklisted");

        uint256 pricetoPay = votePrice * _amount;

        require(token.balanceOf(msg.sender) >= pricetoPay, "Need more tokens than you hold.");
        require(token.transferFrom(msg.sender, vault, pricetoPay), "Entry failed due to failed transfer.");
        MemberStoreStruct[msg.sender].votesAvailable += _amount;
    }

    function spendVotes(uint256 _amount) public nonReentrant {
        require(isMember(tx.origin), "You are not yet a member");
        require(!_isBlacklisted[tx.origin], "You are Blacklisted");
        require(MemberStoreStruct[tx.origin].votesAvailable >= _amount, "You dont have enough Votes");

        MemberStoreStruct[tx.origin].votesAvailable -= _amount;
    }

    function returnMembership() public nonReentrant returns (bool isSuccessfull){
        require(isMember(msg.sender), "You are not a member");
        if (isBlacklisted(msg.sender)) {
            require(token.transfer(deadAddress, getMembersFeePaid(msg.sender)), "You blocked the transfer somehow");
        }
        require(token.transfer(msg.sender, getMembersFeePaid(msg.sender)), "You blocked the transfer somehow");
        MemberStoreStruct[msg.sender].isMember = false;
        _isBlacklisted[msg.sender] = true;
        return true;
    }

    function blacklistMember(address _address) external onlyOwner returns (bool success) {
        require(isMember(_address), "No Entry for this address");
        require(!_isBlacklisted[_address], "This address is blacklisted already");

        MemberStoreStruct[_address].isBlacklisted = true;
        MemberStoreStruct[_address].isMember = false;
        MemberStoreStruct[_address].timeEdited = block.timestamp;
        _isBlacklisted[_address] = true;
        return true;
    }
    //Getter and Setter for the Blacklist
    function includeInBlacklist(address account) external onlyOwner {
        _isBlacklisted[account] = true;
    }

    function removefromBlacklist(address account) external onlyOwner {
        require(_isBlacklisted[account], "Account is not excluded");
        _isBlacklisted[account] = false;
        MemberStoreStruct[account].isBlacklisted = false;
        MemberStoreStruct[account].timeEdited = block.timestamp;
    }

    function changeMembershipCosts(uint256 _amount) external onlyOwner {
        membershipCosts = _amount;
    }

    function changeVoteCosts(uint256 _amount) external onlyOwner {
        votePrice = _amount;
    }

    function changeVaultAddress(address _vault) external onlyOwner {
        vault = _vault;
    }

    function inCaseTokensGetStuck(address _token) external onlyOwner {
        uint256 amount = IERC20(_token).balanceOf(address(this));
        IERC20(_token).transfer(msg.sender, amount);
    }

    function airdropVotes(address _account, uint256 _amount) external onlyOwner {
        MemberStoreStruct[_account].votesAvailable += _amount;
    }

    function airdropVotesToAll(uint256 _amount) external onlyOwner {
        for (uint i = 0; i < entityList.length; i++) {
            if (isMember(entityList[i])) {
                MemberStoreStruct[entityList[i]].votesAvailable += _amount;}
        }
    }

    function getAllMembers() external view returns (uint256[] memory, bool[] memory, bool[] memory, uint256[] memory, uint256[] memory, uint256[] memory, address[] memory, uint256[] memory) {
        uint256[] memory isUserID = new uint256[](entityList.length);
        bool[] memory activeMember = new bool[](entityList.length);
        bool[] memory isBlacklistedMember = new bool[](entityList.length);
        uint256[] memory timeRegistered = new uint256[](entityList.length);
        uint256[] memory timeEdit = new uint256[](entityList.length);
        uint256[] memory feePaid = new uint256[](entityList.length);
        address[] memory owner = new address[](entityList.length);
        uint256[] memory votesAvailable = new uint256[](entityList.length);

        for (uint i = 0; i < entityList.length; i++) {
            if (isMember(entityList[i])) {
                isUserID[i] = MemberStoreStruct[entityList[i]].userName;
                activeMember[i] = MemberStoreStruct[entityList[i]].isMember;
                isBlacklistedMember[i] = MemberStoreStruct[entityList[i]].isBlacklisted;
                timeRegistered[i] = MemberStoreStruct[entityList[i]].timeOfMessage;
                timeEdit[i] = MemberStoreStruct[entityList[i]].timeEdited;
                feePaid[i] = MemberStoreStruct[entityList[i]].feePaid;
                owner[i] = MemberStoreStruct[entityList[i]].messageSender;
                votesAvailable[i] = MemberStoreStruct[entityList[i]].votesAvailable;}
        }


        return (isUserID, activeMember, isBlacklistedMember, timeRegistered, timeEdit, feePaid, owner, votesAvailable);}

    receive() external payable {
        revert ();
    }
}