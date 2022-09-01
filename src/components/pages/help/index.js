import React, { useState, useEffect } from 'react';
import SearchBox from '../../general/SearchBox';
import { NAV_LIST, QUESTIONS_ANS } from './navList';
import { Nav, NavItem, NavLink, TabContent, TabPane, Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
const Help = () => {
  const [navTabActive, setNavTabActive] = useState(0);
  const [navTabContentShow, setNavTabContentShow] = useState('show');
  const [open, setOpen] = useState('0');
  useEffect(() => {
    console.log('200');
    const timer = setTimeout(() => {
      setNavTabContentShow('show');
    }, 200);
    return () => clearTimeout(timer);
  }, [navTabContentShow]);

  const tabActiveHandler = (i) => {
    setNavTabActive(i);
    setNavTabContentShow('');
  };

  const toggle = (id) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

  return (
    <>
      <main className='main-wrap help-page mb-xxl'>
        <SearchBox />

        <section className='questions-section pb-0'>
          <Nav className='nav-tab nav-pills custom-scroll-hidden'>
            {NAV_LIST.map((item, i) => (
              <NavItem key={i}>
                <NavLink onClick={() => tabActiveHandler(i)} className={`${navTabActive === i ? 'active' : ''}`}>
                  {item}
                </NavLink>
              </NavItem>
            ))}
          </Nav>

          <div className='banner section-p-tb'>
            <img src='assets/svg/help.svg' alt='help' />
          </div>

          <TabContent className='ratio2_1' activeTab={`${navTabActive}`}>
            <h1 className='font-md fw-600'>Frequently Asked Questions</h1>
            {NAV_LIST.map((_, j) => (
              <TabPane className={`fade ${navTabActive === j && navTabContentShow}`} key={j} tabId={`${j}`}>
                <Accordion open={open} toggle={toggle}>
                  {QUESTIONS_ANS.map((item, i) => (
                    <AccordionItem key={i}>
                      <AccordionHeader targetId={`${i}`}>{item.question}</AccordionHeader>
                      <AccordionBody accordionId={`${i}`}>
                        <p className='content-color font-xs'>{item.ans}</p>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPane>
            ))}
          </TabContent>
        </section>
      </main>
    </>
  );
};
export default Help;
