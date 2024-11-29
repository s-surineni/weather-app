import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

export default function Forecast({ forecast }) {
    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {forecast.list.slice(0, 7).map((day, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {JSON.stringify(day)}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}