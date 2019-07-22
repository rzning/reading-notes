package com.java.blockChain;
import java.util.ArrayList;

public class BlockChain {
    private ArrayList<Block> chain = new ArrayList<>();

    public BlockChain () {
        this.chain.add(this.createGenesisBlock());
    }

    public ArrayList<Block> getBlockChain () {
        return this.chain;
    }

    public Block createGenesisBlock () {
        return new Block(0, "1st Jan 2017", "First Block", "0", 0);
    }

    public Block getLatestBlock () {
        return this.chain.get(this.chain.size() - 1);
    }

    public void addNewBlock (Block block) {
        block.setPreviousHash(this.getLatestBlock().getHash());
        block.setHash(block.calculateHash());
        this.chain.add(block);
    }

    public void addNewBlockWithMining (Block block, int difficulty) {
        if (difficulty == 0) {
            this.addNewBlock(block);
        }

        StringBuilder sb = new StringBuilder ();
        for (int i = 0; i < difficulty; i++) {
            sb.append("0")
        }
        String leadingZeroes = sb.toString();
        System.out.println("leadingZeroes:" + leadingZeroes);

        block.setPreviousHash(this.getLatestBlock().getHash());
        block.setHash(block.calculateHash());

        while (block.getHash().substring(0, difficulty) != leadingZeroes) {
            block.setNonce(block.getNonce() + 1);
            block.setHash(block.calculateHash());
            System.out.println("Current Block's hash:" + block.getHash());
        }

        System.out.println("Block mined with hash:" + block.getHash());

        this.chain.add(block);
    }

    public boolean validateChain (BlockChain blockChain) {
        for (int i = 1; i < blockChain.getBlockChain().size(); i++) {
            Block currentBlock = blockChain.getBlockChain().get(i);
            Block previousBlock = blockChain.getBlockChain().get(i - 1);

            if (!currentBlock.getPreviousHash().equals(previousBlock.getHash())) {
                return false;
            }

            if (!currentBlock.getHash().equals(currentBlock.calculateHash())) {
                return false;
            }
        }
        return true;
    }

    public String toString () {
        StringBuilder sb = new StringBuilder();
        StringBuilder bc = new StringBuilder();
        for (Block block : this.chain) {
            sb.append("\n index:" + block.getIndex()
                + ", date:" + block.getDate()
                + ", transaction:" + block.getTransaction()
                + ", previousHash:" + block.getPreviousHash()
                + ", hash:" + block.getHash());
            bc.append(block.getHash());
        }
        return "BlockChain:" + bc.toString() + " Data:" + sb.toString();
    }
}
