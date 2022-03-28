package com.URI;

import java.util.Scanner;

public class P1002 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double n = 3.14159;
        double a, r;

        r = scanner.nextDouble();
        a = (Math.pow(r, 2)) * n;

        System.out.printf("A=%.4f", a);
    }
}
