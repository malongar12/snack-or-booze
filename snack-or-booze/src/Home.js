import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {
  
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>

          {snacks && drinks ? (
          <>
            <p>Snacks: {snacks.length}</p>
            <p>Drinks: {drinks.length}</p>
          </>
        ) : (
          <p>We don't have any snacks or drinks available right now.</p>
        )}
          
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
