package com.java.blockChain;
import java.security.MessageDigest;
import javax.xml.bind.DatatypeConverter;

public class Block {
    private int index;
    private String dateTimeStampOfTransaction;
    private String transactionDetails;
    private String previousHash;
    private String hash;
    private int nonce;

    public Block (int index, String date, String transaction, String previousHash, int nonce) {
        this.index = index;
        this.dateTimeStampOfTransaction = date;
        this.transactionDetails = transaction;
        this.previousHash = previousHash;
        this.nonce = nonce;
        this.hash = calculateHash();
    }

    public String calculateHash () {
        return "" + (this.index + this.previousHash + this.dateTimeStampOfTransaction + 
            this.transactionDetails + this.nonce).hashCode();
    }

    public String getPreviousHash () {
        return this.previousHash;
    }

    public void setPreviousHash (String previousHash) {
        this.previousHash = previousHash;
    }

    public int getIndex () {
        return this.index;
    }
    
    public String getDate () {
        return this.dateTimeStampOfTransaction;
    }

    public String getTransaction () {
        return this.transactionDetails;
    }

    public void setTransaction (String transaction) {
        this.transactionDetails = transaction;
    }

    public String getHash () {
        return this.hash;
    }

    public void setHash (String hash) {
        this.hash = hash;
    }

    public int getNonce () {
        return this.nonce;
    }

    public void setNonce (int nonce) {
        this.nonce = nonce;
    }
}
