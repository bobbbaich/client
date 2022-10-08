import React, {useEffect} from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';
import {useAppDispatch, useAppSelector} from "../../redux/common/hooks";
import {readAll, selectRewards} from "../../redux/rewardSlice";
import {RewardTableActions} from "./RewardTableActions";

export function Rewards() {
    const dispatch = useAppDispatch();
    const rewards = useAppSelector(selectRewards);

    useEffect(() => {
        dispatch(readAll())
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="header">
                        Rewards
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped={true}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>UUID</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rewards.content.length > 0 && rewards.content.map((reward, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{reward.uuid}</td>
                                    <td>{reward.name}</td>
                                    <td><RewardTableActions rewardUuid={reward.uuid}/></td>
                                </tr>)
                        })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}