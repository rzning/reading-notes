```java
package com.java.Client;
import com.java.blockChain.Block;
import com.java.blockChain.BlockChain;

public class BlockChainClient () {
    public static void main (String[] args) {
        BlockChain bc = new BlockChain();
        bc.addNewBlock(new Block(1, "1st Feb 2017", "I gave Tom Rs 100", "0", 0));
        bc.addNewBlock(new Block(2, "1st Mar 2017", "I gave Harry Rs 100", "0", 0));

        System.out.println("Data is not tampered yet. Is BlockChain Valid?");
        System.out.println(bc.validateChain(bc));
        System.out.println(bc.toString());

        // 数据更改
        bc.getBlockChain().get(1).setTransaction("I gave Tom Rs 1000");

        System.out.println("Data is TAMTERED now. Is BlockChain valid?");
        System.out.println(bc.validateChain());
        System.out.println("The entire BlockChain:");
        System.out.println(bc.toString());

        // 通过挖矿将数据写入区块链
        BlockChain bc2 = new BlockChain();
        bc2.addNewBlockWithMining(new Block(1, "1st Feb 2017", "I gave Tom Rs 1000", "0", 0), 1);

        System.out.println(bc2.validateChain(bc2));
        System.out.println(bc2.toString());
    }
}
```
