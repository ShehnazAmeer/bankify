const style = {
    insideHomeScreen: '"rounded-full h-[clamp(20rem,40vw,60rem)] w-[clamp(25rem,50vw,70rem)]',
    insideLogin:'w-[clamp(20rem,80vw,80rem)] h-[clamp(20rem,80vw,80rem)] object-hidden '
}
export default function BankifyImage({category,styles}) {
    return (
       <img src='./cashier.jpg' className={`${style[category]} ${styles}`} />
    )
}