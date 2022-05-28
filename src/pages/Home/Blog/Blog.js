import React, { Fragment } from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="accouditon py-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header> Difference between authorization and authentication</Accordion.Header>
              <Accordion.Body>
                <strong>Authentication</strong>
                <p>Usually the first step of security access Control
                  Verifies the user's identity

                  Common methods include username, password, answer to a security question, code sent via SMS or email

                  User biometric data like fingerprint, face recognition, retinal scan

                  It's visible by the user

                  It's changeable by the user</p>

                <strong>Authorization</strong>
                <p>Usually comes after authentication

                  Grants of denies permissions to the user do something

                  Permissions are granted and monitored by the organization

                  Common methods include role-based access control and attribute-based access control

                  It's not visible by the user

                  Cannot be changed by the user</p>

              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Why are you using firebase? What other options do you have to
                implement authentication?</Accordion.Header>
              <Accordion.Body>
                Muntasir Ahmed Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. As an Android developer I use Firebase in most of my projects. It has many features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, etc. and i can this optinons implement my project.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
              <Accordion.Body>
                Firebase Authentication provides backend services, an easy-to-use SDK, and a UI library built into your app to authenticate users. Most website users need to know their identity by supporting authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter and many more. An anonymous app allows an app to securely store user data in the cloud and provide the same personalized experience across all user devices
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

    </Fragment>
  );
};

export default Blog;
