# Binary Numbers 

## Base-10: Decimal 

2 Digits
00
01 
02 
...
10
.. 
99
00

Count one from 99 to 100 would return 
The right most digit turns 00 


# Base-2: Binary 

Only two digits 0 and 1 
Byte is 8 bits (binary digits)

Binary numbers are written as 0b at the beginning to differentiate decimal value which is one thousand. 0b1010 (9)

0000 (0)
0001 (1)
0010 (2)
0011 (3)
0100 (4)
0101 (5)
0110 (6)
0111 (7)
1000 (8)

### Translating from binary to decimal 

Multiply each digit by the number base raised to the nth power, where n is its position starting form the right. Then add all the results together 

```
Consider the binary number, 0b11001010
20 * 0 =   1 * 0 = 0
21 * 1 =   2 * 1 = 2
22 * 0 =   4 * 0 = 0
23 * 1 =   8 * 1 = 8
24 * 0 =  16 * 0 = 0
25 * 0 =  32 * 0 = 0
26 * 1 =  64 * 1 = 64
27 * 1 = 128 * 1 = 128
```

Adding up the results gives 2 + 8 + 64 + 128 = 202. The binary is equal to 202 in decimal. 


## Base-16: Hexadecmial 

The digits are 0-9 with A, B, C, D, E and F representing 10, 11, 12, 13, 14 and 15, respectively. Hexademical numbers (sometimes called 'hex' for short) are prepended with an 0x to differentiate them as base-16.

Hexadecimal can represent binary values: one hex can represent four bits

```
0 = 0b0000 = 0x0
1 = 0b0001 = 0x1
2 = 0b0010 = 0x2
3 = 0b0011 = 0x3
4 = 0b0100 = 0x4
5 = 0b0101 = 0x5
6 = 0b0110 = 0x6
7 = 0b0111 = 0x7
8 = 0b1000 = 0x8
9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF
```

### Translating from hexadecmial to decimal 
Consider the hex number 0xF23C. 

160 * C =    1 * 12 = 12
161 * 3 =   16 *  3 = 48
162 * 2 =  256 *  2 = 512
163 * F = 4096 * 15 = 61440

Adding these values up 61440 + 512 + 48 + 12 returns 62012 

## Bytes 
kilo - thousand
mega - million
giga - billion
tera - trillion
peta - quadrillion
exa - quintillion
zetta - sextillion
yotta - septillion
