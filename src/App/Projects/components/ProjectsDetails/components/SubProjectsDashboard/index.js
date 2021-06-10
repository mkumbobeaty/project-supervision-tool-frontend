import React from 'react';
import PropTypes from "prop-types";
import SubProjectsList from "../../../../../components/ListItemsComponent";
import { Col, Row } from 'antd';
import ProgressBar from "../../../../../components/Progress";
import './styles.css';

/* constants */
const procuringEntitySpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 0, xs: 0, };
const packagesSpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 0, xs: 0, offset: 1 };
const nameSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 20, xs: 20, offset: 1 };
const statusSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0, offset: 1 };
const physicalSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 0, xs: 0 };
const financialSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 0, xs: 0, offset: 1 };

const headerLayout = [
    { ...procuringEntitySpan, header: "Procuring Entity" },
    { ...packagesSpan, header: "Package" },
    { ...nameSpan, header: "SubProject Name" },
    { ...statusSpan, header: "Status" },
    { ...physicalSpan, header: "Physical Progress" },
    { ...financialSpan, header: "Financial Progress" },
]

const project = {
    "components": [
        {
            "id": 1,
            "name": "Priority Infrastructure",
            "description": "Priority Infrastructure",
            "sub_components": [
                {
                    "id": 1,
                    "name": "Priority Roads",
                    "description": "Priority Roads",
                    "status": "Active",
                    "physical_progress": {
                        "color": '#086a59',
                        "percent": '70',
                        "remain": '30'

                    },
                    "fiscal_progress": {
                        "color": '#0f6788',
                        "percent": '40',
                        "remain": '60'

                    },
                    "procuring_entities": [
                        {
                            "id": 1,
                            "packages": [
                                {
                                    "id": 1,
                                    "name": "Package 1",
                                    "description": "Package 1",
                                    "procuring_entity_id": 1,
                                    "contract": {
                                        "id": 1,
                                        "name": "LGA/017/2015-2016/W/102",
                                        "contract_no": "LGA/017/2015-2016/W/102",
                                        "contract_cost": {
                                            "id": 1,
                                            "works_certified_to_date_percentage": 13,
                                            "contract_award_value": {
                                                "id": 11,
                                                "amount": 493648671,
                                                "currency": {
                                                    "id": 5,
                                                    "name": "US Dollar",
                                                    "iso": "USD"
                                                }
                                            },
                                            "financial_penalties_applied_value": {
                                                "id": 14,
                                                "amount": 255569622,
                                                "currency": {
                                                    "id": 5,
                                                    "name": "US Dollar",
                                                    "iso": "USD"
                                                }
                                            },
                                            "financial_penalties_granted_value": {
                                                "id": 15,
                                                "amount": 296612887,
                                                "currency": {
                                                    "id": 5,
                                                    "name": "US Dollar",
                                                    "iso": "USD"
                                                }
                                            },
                                            "variations_granted_value": {
                                                "id": 16,
                                                "amount": 284440311,
                                                "currency": {
                                                    "id": 5,
                                                    "name": "US Dollar",
                                                    "iso": "USD"
                                                }
                                            },
                                            "variations_applied_not_yet_granted_value": {
                                                "id": 17,
                                                "amount": 149943724,
                                                "currency": {
                                                    "id": 5,
                                                    "name": "US Dollar",
                                                    "iso": "USD"
                                                }
                                            },
                                            "estimated_final_contract_price": {
                                                "id": 18,
                                                "amount": 280124221,
                                                "currency": {
                                                    "id": 5,
                                                    "name": "US Dollar",
                                                    "iso": "USD"
                                                }
                                            }
                                        },
                                        "contract_time": {
                                            "id": 1,
                                            "start_date": "1980-12-31T00:01:17.000000Z",
                                            "original_contract_period": "3",
                                            "defects_liability_period": "1",
                                            "time_extension_granted": "6",
                                            "time_extension_applied_not_yet_granted": "8",
                                            "intended_completion_date": "1976-11-03T18:30:28.000000Z",
                                            "revised_completion_date": "1998-02-24T09:08:27.000000Z",
                                            "time_percentage_lapsed_to_date": 6,
                                            "created_at": "2021-05-06T11:42:18.000000Z",
                                            "updated_at": "2021-05-06T11:42:18.000000Z",
                                            "deleted_at": null
                                        },
                                        "contractor": {
                                            "id": 10,
                                            "name": "GROUP SIX INTERNATIONAL CO. LTD",
                                            "website": "www.com",
                                            "focalPerson": {
                                                "id": 2,
                                                "first_name": "Beatrice",
                                                "last_name": "Mkumbo",
                                                "middle_name": "Charles",
                                                "phone": "248-402-0400 x528",
                                                "email": "charsbeaty@gmail.com",
                                                "type": "focal_person",
                                                "email_verified_at": "2020-11-16T08:14:25.000000Z",
                                                "created_at": null,
                                                "updated_at": null
                                            },
                                            "location": null,
                                            "type": "contractor",
                                            "created_at": null,
                                            "updated_at": null
                                        },
                                        "created_at": "2021-05-06T11:25:11.000000Z",
                                        "updated_at": "2021-05-06T11:25:11.000000Z"
                                    },
                                    "sub_projects": []
                                },
                                {
                                    "id": 2,
                                    "name": "Package 2",
                                    "description": "Package 2",
                                    "procuring_entity_id": 1,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 3,
                                    "name": "Package 3",
                                    "description": "Package 3",
                                    "procuring_entity_id": 1,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 4,
                                    "name": "Package 7",
                                    "description": "Package 7",
                                    "procuring_entity_id": 1,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 5,
                                    "name": "Package 8",
                                    "description": "Package 8",
                                    "procuring_entity_id": 1,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 6,
                                    "name": "Package 9",
                                    "description": "Package 9",
                                    "procuring_entity_id": 1,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 12,
                                "name": "Kinondoni",
                                "website": "lehner.org",
                                "focal_person_id": 3,
                                "type": "actor",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 1,
                                "name": "Priority Roads",
                                "description": "Priority Roads",
                                "project_component_id": "1",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        },
                        {
                            "id": 2,
                            "packages": [
                                {
                                    "id": 7,
                                    "name": "Package 1",
                                    "description": "Package 1",
                                    "procuring_entity_id": 2,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 8,
                                    "name": "Package 7",
                                    "description": "Package 7",
                                    "procuring_entity_id": 2,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 13,
                                "name": "Ilala",
                                "website": "lehner.org",
                                "focal_person_id": 1,
                                "type": "actor",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 1,
                                "name": "Priority Roads",
                                "description": "Priority Roads",
                                "project_component_id": "1",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        },
                        {
                            "id": 3,
                            "packages": [
                                {
                                    "id": 9,
                                    "name": "Package 1",
                                    "description": "Package 1",
                                    "procuring_entity_id": 3,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 10,
                                    "name": "Package 2",
                                    "description": "Package 2",
                                    "procuring_entity_id": 3,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 11,
                                    "name": "Package 3",
                                    "description": "Package 3",
                                    "procuring_entity_id": 3,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 14,
                                "name": "Temeke",
                                "website": "lehner.org",
                                "focal_person_id": 3,
                                "type": "actor",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 1,
                                "name": "Priority Roads",
                                "description": "Priority Roads",
                                "project_component_id": "1",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Flood Control and Storm Water Drainage",
                    "description": "Flood Control and Storm Water Drainage",
                    "physical_progress": {
                        "color": '#086a59',
                        "percent": '99',
                        "remain": '1'

                    },
                    "fiscal_progress": {
                        "color": '#0f6788',
                        "percent": '45.5',
                        "remain": '55.5'

                    },
                    "procuring_entities": [
                        {
                            "id": 4,
                            "packages": [
                                {
                                    "id": 12,
                                    "name": "Package 4",
                                    "description": "Package 4",
                                    "procuring_entity_id": 4,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 12,
                                "name": "Kinondoni",
                                "website": "lehner.org",
                                "focal_person_id": 3,
                                "type": "actor",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 2,
                                "name": "Flood Control and Storm Water Drainage",
                                "description": "Flood Control and Storm Water Drainage",
                                "project_component_id": "1",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        },
                        {
                            "id": 5,
                            "packages": [
                                {
                                    "id": 13,
                                    "name": "Package 2",
                                    "description": "Package 2",
                                    "procuring_entity_id": 5,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 14,
                                    "name": "Package 3",
                                    "description": "Package 3",
                                    "procuring_entity_id": 5,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 13,
                                "name": "Ilala",
                                "website": "lehner.org",
                                "focal_person_id": 1,
                                "type": "actor",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 2,
                                "name": "Flood Control and Storm Water Drainage",
                                "description": "Flood Control and Storm Water Drainage",
                                "project_component_id": "1",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        },
                        {
                            "id": 6,
                            "packages": [
                                {
                                    "id": 15,
                                    "name": "Package 4",
                                    "description": "Package 4",
                                    "procuring_entity_id": 6,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 16,
                                    "name": "Package 5",
                                    "description": "Package 5",
                                    "procuring_entity_id": 6,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 14,
                                "name": "Temeke",
                                "website": "lehner.org",
                                "focal_person_id": 3,
                                "type": "actor",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 2,
                                "name": "Flood Control and Storm Water Drainage",
                                "description": "Flood Control and Storm Water Drainage",
                                "project_component_id": "1",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Contingency for Disaster Risk Response",
                    "description": "Contingency for Disaster Risk Response",
                    "physical_progress": {
                        "color": '#086a59',
                        "percent": '66',
                        "remain": '34'

                    },
                    "fiscal_progress": {
                        "color": '#0f6788',
                        "percent": '23',
                        "remain": '76'

                    },
                    "procuring_entities": []
                },
                {
                    "id": 6,
                    "name": "Temeke MC",
                    "description": "Temeke MC",
                    "physical_progress": {
                        "color": '#086a59',
                        "percent": '50',
                        "remain": '50'

                    },
                    "fiscal_progress": {
                        "color": '#0f6788',
                        "percent": '60',
                        "remain": '40'

                    },
                    "procuring_entities": [
                        {
                            "id": 9,
                            "packages": [
                                {
                                    "id": 22,
                                    "name": "Package 6",
                                    "description": "Package 6",
                                    "procuring_entity_id": 9,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 23,
                                    "name": "Package 7",
                                    "description": "Package 7",
                                    "procuring_entity_id": 9,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 24,
                                    "name": "Package 8",
                                    "description": "Package 8",
                                    "procuring_entity_id": 9,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 25,
                                    "name": "Package 9",
                                    "description": "Package 9",
                                    "procuring_entity_id": 9,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 26,
                                    "name": "Package 10",
                                    "description": "Package 10",
                                    "procuring_entity_id": 9,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 27,
                                    "name": "Package 11",
                                    "description": "Package 11",
                                    "procuring_entity_id": 9,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 28,
                                    "name": "Package 12",
                                    "description": "Package 12",
                                    "procuring_entity_id": 9,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 14,
                                "name": "Temeke",
                                "website": "lehner.org",
                                "focal_person_id": 3,
                                "type": "actor",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 6,
                                "name": "Temeke MC",
                                "description": "Temeke MC",
                                "project_component_id": "1",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "Upgrading in Low Income Communities",
            "description": "Upgrading in Low Income Communities",
            "sub_components": [
                {
                    "id": 4,
                    "name": "Kinondoni MC",
                    "description": "Kinondoni MC",
                    "status": "Active",
                    "physical_progress": {
                        "color": '#086a59',
                        "percent": '70',
                        "remain": '30'

                    },
                    "fiscal_progress": {
                        "color": '#0f6788',
                        "percent": '40',
                        "remain": '60'

                    },
                    "procuring_entities": [
                        {
                            "id": 7,
                            "packages": [
                                {
                                    "id": 17,
                                    "name": "Package 5",
                                    "description": "Package 5",
                                    "procuring_entity_id": 7,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 18,
                                    "name": "Package 6",
                                    "description": "Package 6",
                                    "procuring_entity_id": 7,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 12,
                                "name": "Kinondoni",
                                "website": "lehner.org",
                                "focal_person_id": 3,
                                "type": "actor",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 4,
                                "name": "Kinondoni MC",
                                "description": "Kinondoni MC",
                                "project_component_id": "2",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "Ilala MC",
                    "description": "Ilala MC",
                    "procuring_entities": [
                        {
                            "id": 8,
                            "packages": [
                                {
                                    "id": 19,
                                    "name": "Package 4",
                                    "description": "Package 4",
                                    "procuring_entity_id": 8,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 20,
                                    "name": "Package 5",
                                    "description": "Package 5",
                                    "procuring_entity_id": 8,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 21,
                                    "name": "Package 6",
                                    "description": "Package 6",
                                    "procuring_entity_id": 8,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 13,
                                "name": "Ilala",
                                "website": "lehner.org",
                                "focal_person_id": 1,
                                "type": "actor",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 5,
                                "name": "Ilala MC",
                                "description": "Ilala MC",
                                "project_component_id": "2",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                },
                {
                    "id": 7,
                    "name": "Solid Waste Equipment",
                    "description": "Solid Waste Equipment",
                    "procuring_entities": [
                        {
                            "id": 10,
                            "packages": [
                                {
                                    "id": 29,
                                    "name": "Package 15",
                                    "description": "Package 15",
                                    "procuring_entity_id": 10,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 30,
                                    "name": "Package 15",
                                    "description": "Package 15",
                                    "procuring_entity_id": 10,
                                    "contract": null,
                                    "sub_projects": []
                                },
                                {
                                    "id": 31,
                                    "name": "Package 1",
                                    "description": "Package 15",
                                    "procuring_entity_id": 10,
                                    "contract": null,
                                    "sub_projects": []
                                }
                            ],
                            "agency": {
                                "id": 3,
                                "name": "Regional Administration and Local Government (PMO-RALG)",
                                "website": "maggio.net",
                                "focal_person_id": 1,
                                "type": "implementing_agency",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 7,
                                "name": "Solid Waste Equipment",
                                "description": "Solid Waste Equipment",
                                "project_component_id": "2",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "name": "Institutional Strengthening",
            "description": "Institutional Strengthening",
            "sub_components": [
                {
                    "id": 8,
                    "name": "Improving Metropolitan Governance Arrangement and Systems",
                    "description": "Improving Metropolitan Governance Arrangement and Systems",
                    "status": "Active",
                    "physical_progress": {
                        "color": '#086a59',
                        "percent": '70',
                        "remain": '30'

                    },
                    "fiscal_progress": {
                        "color": '#0f6788',
                        "percent": '40',
                        "remain": '60'

                    },
                    "procuring_entities": []
                },
                {
                    "id": 9,
                    "name": "Improving Local Government Revenue Collection Systems and Mainstreaming Geographic Information Systems",
                    "description": "Improving Local Government Revenue Collection Systems and Mainstreaming Geographic Information Systems",
                    "procuring_entities": [
                        {
                            "id": 11,
                            "packages": [],
                            "agency": {
                                "id": 3,
                                "name": "Regional Administration and Local Government (PMO-RALG)",
                                "website": "maggio.net",
                                "focal_person_id": 1,
                                "type": "implementing_agency",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 9,
                                "name": "Improving Local Government Revenue Collection Systems and Mainstreaming Geographic Information Systems",
                                "description": "Improving Local Government Revenue Collection Systems and Mainstreaming Geographic Information Systems",
                                "project_component_id": "3",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                },
                {
                    "id": 10,
                    "name": "Support for Integrated Transport and Land-use Planning",
                    "description": "Support for Integrated Transport and Land-use Planning",
                    "procuring_entities": [
                        {
                            "id": 12,
                            "packages": [],
                            "agency": {
                                "id": 3,
                                "name": "Regional Administration and Local Government (PMO-RALG)",
                                "website": "maggio.net",
                                "focal_person_id": 1,
                                "type": "implementing_agency",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 10,
                                "name": "Support for Integrated Transport and Land-use Planning",
                                "description": "Support for Integrated Transport and Land-use Planning",
                                "project_component_id": "3",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                },
                {
                    "id": 11,
                    "name": "Strengthening Operations and Maintenance Systems",
                    "description": "Strengthening Operations and Maintenance Systems",
                    "procuring_entities": [
                        {
                            "id": 13,
                            "packages": [],
                            "agency": {
                                "id": 3,
                                "name": "Regional Administration and Local Government (PMO-RALG)",
                                "website": "maggio.net",
                                "focal_person_id": 1,
                                "type": "implementing_agency",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 11,
                                "name": "Strengthening Operations and Maintenance Systems",
                                "description": "Strengthening Operations and Maintenance Systems",
                                "project_component_id": "3",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                },
                {
                    "id": 12,
                    "name": "Urban Analytics",
                    "description": "Urban Analytics",
                    "procuring_entities": []
                },
                {
                    "id": 13,
                    "name": "Urban Planning Systems",
                    "description": "Urban Planning Systems",
                    "procuring_entities": [
                        {
                            "id": 14,
                            "packages": [],
                            "agency": {
                                "id": 3,
                                "name": "Regional Administration and Local Government (PMO-RALG)",
                                "website": "maggio.net",
                                "focal_person_id": 1,
                                "type": "implementing_agency",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            },
                            "project_sub_component": {
                                "id": 13,
                                "name": "Urban Planning Systems",
                                "description": "Urban Planning Systems",
                                "project_component_id": "3",
                                "created_at": null,
                                "updated_at": null,
                                "deleted_at": null
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": 4,
            "name": "Implementation Support and Monitoring and Evaluation",
            "description": "Implementation Support and Monitoring and Evaluation",
            "sub_components": []
        }
    ],

}


const SubProjectDashboard = () => {
    const { components } = project

    return (
        <section className='SubProjectDashboard'>

            {/* list starts */}
            { components ? components?.map(({ name, sub_components }) => {
                debugger
                return <div>
                    <h4 className="text-blue">Components: {name} </h4>
                    <SubProjectsList
                        items={sub_components}
                        // loading={loading}
                        headerLayout={headerLayout}
                        renderListItem={({
                            item,
                        }) => (
                                <div className="ListItem">
                                    <Row align="middle">
                                        {/* eslint-disable react/jsx-props-no-spreading */}
                                        <Col {...procuringEntitySpan} className="contentEllipse">
                                            {" "}

                                            {
                                                item?.procuring_entities.length > 0 ?
                                                    item?.procuring_entities?.map(({ agency }, index) => { return (index ? ", " : "") + agency.name })
                                                    : "N/A"
                                            }
                                        </Col>
                                        <Col {...packagesSpan} className="contentEllipse"
                                            title={item?.procuring_entities?.map(({ packages }) =>
                                                packages.map(({ name }) => name))
                                            }
                                        >

                                            {
                                                item?.procuring_entities.length > 0 ? item?.procuring_entities?.map(({ packages }) =>
                                                    packages.length > 0 ? packages.map(({ name }, index) => { return (index ? ", " : "") + name }) : 'N/A')
                                                    : 'N/A'

                                            }
                                        </Col>
                                        <Col
                                            {...nameSpan}
                                            className="contentEllipse"
                                            title={item.name}
                                        >
                                            {item.name}
                                        </Col>
                                        <Col {...statusSpan} >{item?.status ? item?.status : 'N/A'}</Col>

                                        <Col {...physicalSpan}>
                                            <ProgressBar
                                                bgcolor={item?.physical_progress?.color}
                                                completed={item?.physical_progress?.percent}
                                            />
                                        </Col>

                                        <Col {...financialSpan} >
                                            <ProgressBar
                                                bgcolor={item?.fiscal_progress?.color}
                                                completed={item?.fiscal_progress?.percent}
                                            />
                                        </Col>
                                        {/* eslint-enable react/jsx-props-no-spreading */}
                                    </Row>
                                </div>

                            )}
                    />
                </div>

            }

            ) : <h2 style={{paddingTop:'20px', color:'#0f6788', fontSize: '18px'}}>This Project has no components</h2>
            }

            {/* end list */}

        </section>
    )

}


SubProjectDashboard.propTypes = {
    loading: PropTypes.bool.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({ _id: PropTypes.string }))
        .isRequired,
};

export default SubProjectDashboard;

