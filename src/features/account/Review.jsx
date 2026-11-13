import Card from "../../ui/Card";
import MainHeading from "../../ui/MainHeading";

export default function Review(){
    return(
        <section>
            <MainHeading>We'll issue the following receiving accounts based on the info you provided</MainHeading>
            <div className='border text-gray-900 border-gray-100 w-200'>
                <Card/>
                <div>
                    container 2
                </div>
                <div>
                    container 1
                </div>
            </div>
        </section>
    )
}