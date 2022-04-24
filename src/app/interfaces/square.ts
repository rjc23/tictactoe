export interface Square {
    key: number,
    value: string,
    border: {
        topBorder: boolean,
        rightBorder: boolean,
        bottomBorder: boolean,
        leftBorder: boolean,
    }
}