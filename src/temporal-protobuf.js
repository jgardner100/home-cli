/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  temporal: {
    nested: {
      api: {
        nested: {
          common: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/common/v1;common",
                  java_package: "io.temporal.api.common.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Common::V1",
                  csharp_namespace: "Temporal.Api.Common.V1"
                },
                nested: {
                  DataBlob: {
                    fields: {
                      encoding_type: {
                        type: "temporal.api.enums.v1.EncodingType",
                        id: 1
                      },
                      data: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  Payloads: {
                    fields: {
                      payloads: {
                        rule: "repeated",
                        type: "Payload",
                        id: 1
                      }
                    }
                  },
                  Payload: {
                    fields: {
                      metadata: {
                        keyType: "string",
                        type: "bytes",
                        id: 1
                      },
                      data: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  SearchAttributes: {
                    fields: {
                      indexed_fields: {
                        keyType: "string",
                        type: "Payload",
                        id: 1
                      }
                    }
                  },
                  Memo: {
                    fields: {
                      fields: {
                        keyType: "string",
                        type: "Payload",
                        id: 1
                      }
                    }
                  },
                  Header: {
                    fields: {
                      fields: {
                        keyType: "string",
                        type: "Payload",
                        id: 1
                      }
                    }
                  },
                  WorkflowExecution: {
                    fields: {
                      workflow_id: {
                        type: "string",
                        id: 1
                      },
                      run_id: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  WorkflowType: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  ActivityType: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  RetryPolicy: {
                    fields: {
                      initial_interval: {
                        type: "google.protobuf.Duration",
                        id: 1,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      backoff_coefficient: {
                        type: "double",
                        id: 2
                      },
                      maximum_interval: {
                        type: "google.protobuf.Duration",
                        id: 3,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      maximum_attempts: {
                        type: "int32",
                        id: 4
                      },
                      non_retryable_error_types: {
                        rule: "repeated",
                        type: "string",
                        id: 5
                      }
                    }
                  }
                }
              }
            }
          },
          replication: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/replication/v1;replication",
                  java_package: "io.temporal.api.replication.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Replication::V1",
                  csharp_namespace: "Temporal.Api.Replication.V1"
                },
                nested: {
                  ClusterReplicationConfig: {
                    fields: {
                      cluster_name: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  NamespaceReplicationConfig: {
                    fields: {
                      active_cluster_name: {
                        type: "string",
                        id: 1
                      },
                      clusters: {
                        rule: "repeated",
                        type: "ClusterReplicationConfig",
                        id: 2
                      },
                      state: {
                        type: "temporal.api.enums.v1.ReplicationState",
                        id: 3
                      }
                    }
                  }
                }
              }
            }
          },
          taskqueue: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/taskqueue/v1;taskqueue",
                  java_package: "io.temporal.api.taskqueue.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::TaskQueue::V1",
                  csharp_namespace: "Temporal.Api.TaskQueue.V1"
                },
                nested: {
                  TaskQueue: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      kind: {
                        type: "temporal.api.enums.v1.TaskQueueKind",
                        id: 2
                      }
                    }
                  },
                  TaskQueueMetadata: {
                    fields: {
                      max_tasks_per_second: {
                        type: "google.protobuf.DoubleValue",
                        id: 1
                      }
                    }
                  },
                  TaskQueueStatus: {
                    fields: {
                      backlog_count_hint: {
                        type: "int64",
                        id: 1
                      },
                      read_level: {
                        type: "int64",
                        id: 2
                      },
                      ack_level: {
                        type: "int64",
                        id: 3
                      },
                      rate_per_second: {
                        type: "double",
                        id: 4
                      },
                      task_id_block: {
                        type: "TaskIdBlock",
                        id: 5
                      }
                    }
                  },
                  TaskIdBlock: {
                    fields: {
                      start_id: {
                        type: "int64",
                        id: 1
                      },
                      end_id: {
                        type: "int64",
                        id: 2
                      }
                    }
                  },
                  TaskQueuePartitionMetadata: {
                    fields: {
                      key: {
                        type: "string",
                        id: 1
                      },
                      owner_host_name: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  PollerInfo: {
                    fields: {
                      last_access_time: {
                        type: "google.protobuf.Timestamp",
                        id: 1,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      identity: {
                        type: "string",
                        id: 2
                      },
                      rate_per_second: {
                        type: "double",
                        id: 3
                      }
                    }
                  },
                  StickyExecutionAttributes: {
                    fields: {
                      worker_task_queue: {
                        type: "TaskQueue",
                        id: 1
                      },
                      schedule_to_start_timeout: {
                        type: "google.protobuf.Duration",
                        id: 2,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      }
                    }
                  },
                  VersionIdNode: {
                    fields: {
                      version: {
                        type: "VersionId",
                        id: 1
                      },
                      previous_compatible: {
                        type: "VersionIdNode",
                        id: 2
                      },
                      previous_incompatible: {
                        type: "VersionIdNode",
                        id: 3
                      }
                    }
                  },
                  VersionId: {
                    fields: {
                      worker_build_id: {
                        type: "string",
                        id: 1
                      }
                    }
                  }
                }
              }
            }
          },
          history: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/history/v1;history",
                  java_package: "io.temporal.api.history.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::History::V1",
                  csharp_namespace: "Temporal.Api.History.V1"
                },
                nested: {
                  WorkflowExecutionStartedEventAttributes: {
                    fields: {
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 1
                      },
                      parent_workflow_namespace: {
                        type: "string",
                        id: 2
                      },
                      parent_workflow_namespace_id: {
                        type: "string",
                        id: 27
                      },
                      parent_workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      },
                      parent_initiated_event_id: {
                        type: "int64",
                        id: 4
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 5
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 6
                      },
                      workflow_execution_timeout: {
                        type: "google.protobuf.Duration",
                        id: 7,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_run_timeout: {
                        type: "google.protobuf.Duration",
                        id: 8,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_timeout: {
                        type: "google.protobuf.Duration",
                        id: 9,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      continued_execution_run_id: {
                        type: "string",
                        id: 10
                      },
                      initiator: {
                        type: "temporal.api.enums.v1.ContinueAsNewInitiator",
                        id: 11
                      },
                      continued_failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 12
                      },
                      last_completion_result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 13
                      },
                      original_execution_run_id: {
                        type: "string",
                        id: 14
                      },
                      identity: {
                        type: "string",
                        id: 15
                      },
                      first_execution_run_id: {
                        type: "string",
                        id: 16
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 17
                      },
                      attempt: {
                        type: "int32",
                        id: 18
                      },
                      workflow_execution_expiration_time: {
                        type: "google.protobuf.Timestamp",
                        id: 19,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      cron_schedule: {
                        type: "string",
                        id: 20
                      },
                      first_workflow_task_backoff: {
                        type: "google.protobuf.Duration",
                        id: 21,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 22
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 23
                      },
                      prev_auto_reset_points: {
                        type: "temporal.api.workflow.v1.ResetPoints",
                        id: 24
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 25
                      },
                      parent_initiated_event_version: {
                        type: "int64",
                        id: 26
                      }
                    }
                  },
                  WorkflowExecutionCompletedEventAttributes: {
                    fields: {
                      result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 2
                      },
                      new_execution_run_id: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  WorkflowExecutionFailedEventAttributes: {
                    fields: {
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 1
                      },
                      retry_state: {
                        type: "temporal.api.enums.v1.RetryState",
                        id: 2
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 3
                      },
                      new_execution_run_id: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  WorkflowExecutionTimedOutEventAttributes: {
                    fields: {
                      retry_state: {
                        type: "temporal.api.enums.v1.RetryState",
                        id: 1
                      },
                      new_execution_run_id: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  WorkflowExecutionContinuedAsNewEventAttributes: {
                    fields: {
                      new_execution_run_id: {
                        type: "string",
                        id: 1
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 2
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 3
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 4
                      },
                      workflow_run_timeout: {
                        type: "google.protobuf.Duration",
                        id: 5,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_timeout: {
                        type: "google.protobuf.Duration",
                        id: 6,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 7
                      },
                      backoff_start_interval: {
                        type: "google.protobuf.Duration",
                        id: 8,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      initiator: {
                        type: "temporal.api.enums.v1.ContinueAsNewInitiator",
                        id: 9
                      },
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 10
                      },
                      last_completion_result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 11
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 12
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 13
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 14
                      }
                    }
                  },
                  WorkflowTaskScheduledEventAttributes: {
                    fields: {
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 1
                      },
                      start_to_close_timeout: {
                        type: "google.protobuf.Duration",
                        id: 2,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      attempt: {
                        type: "int32",
                        id: 3
                      }
                    }
                  },
                  WorkflowTaskStartedEventAttributes: {
                    fields: {
                      scheduled_event_id: {
                        type: "int64",
                        id: 1
                      },
                      identity: {
                        type: "string",
                        id: 2
                      },
                      request_id: {
                        type: "string",
                        id: 3
                      },
                      suggest_continue_as_new: {
                        type: "bool",
                        id: 4
                      },
                      history_size_bytes: {
                        type: "int64",
                        id: 5
                      }
                    }
                  },
                  WorkflowTaskCompletedEventAttributes: {
                    fields: {
                      scheduled_event_id: {
                        type: "int64",
                        id: 1
                      },
                      started_event_id: {
                        type: "int64",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      binary_checksum: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  WorkflowTaskTimedOutEventAttributes: {
                    fields: {
                      scheduled_event_id: {
                        type: "int64",
                        id: 1
                      },
                      started_event_id: {
                        type: "int64",
                        id: 2
                      },
                      timeout_type: {
                        type: "temporal.api.enums.v1.TimeoutType",
                        id: 3
                      }
                    }
                  },
                  WorkflowTaskFailedEventAttributes: {
                    fields: {
                      scheduled_event_id: {
                        type: "int64",
                        id: 1
                      },
                      started_event_id: {
                        type: "int64",
                        id: 2
                      },
                      cause: {
                        type: "temporal.api.enums.v1.WorkflowTaskFailedCause",
                        id: 3
                      },
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 4
                      },
                      identity: {
                        type: "string",
                        id: 5
                      },
                      base_run_id: {
                        type: "string",
                        id: 6
                      },
                      new_run_id: {
                        type: "string",
                        id: 7
                      },
                      fork_event_version: {
                        type: "int64",
                        id: 8
                      },
                      binary_checksum: {
                        type: "string",
                        id: 9
                      }
                    }
                  },
                  ActivityTaskScheduledEventAttributes: {
                    fields: {
                      activity_id: {
                        type: "string",
                        id: 1
                      },
                      activity_type: {
                        type: "temporal.api.common.v1.ActivityType",
                        id: 2
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 4
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 5
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 6
                      },
                      schedule_to_close_timeout: {
                        type: "google.protobuf.Duration",
                        id: 7,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      schedule_to_start_timeout: {
                        type: "google.protobuf.Duration",
                        id: 8,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      start_to_close_timeout: {
                        type: "google.protobuf.Duration",
                        id: 9,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      heartbeat_timeout: {
                        type: "google.protobuf.Duration",
                        id: 10,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 11
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 12
                      }
                    },
                    reserved: [
                      [
                        3,
                        3
                      ]
                    ]
                  },
                  ActivityTaskStartedEventAttributes: {
                    fields: {
                      scheduled_event_id: {
                        type: "int64",
                        id: 1
                      },
                      identity: {
                        type: "string",
                        id: 2
                      },
                      request_id: {
                        type: "string",
                        id: 3
                      },
                      attempt: {
                        type: "int32",
                        id: 4
                      },
                      last_failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 5
                      }
                    }
                  },
                  ActivityTaskCompletedEventAttributes: {
                    fields: {
                      result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      },
                      scheduled_event_id: {
                        type: "int64",
                        id: 2
                      },
                      started_event_id: {
                        type: "int64",
                        id: 3
                      },
                      identity: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  ActivityTaskFailedEventAttributes: {
                    fields: {
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 1
                      },
                      scheduled_event_id: {
                        type: "int64",
                        id: 2
                      },
                      started_event_id: {
                        type: "int64",
                        id: 3
                      },
                      identity: {
                        type: "string",
                        id: 4
                      },
                      retry_state: {
                        type: "temporal.api.enums.v1.RetryState",
                        id: 5
                      }
                    }
                  },
                  ActivityTaskTimedOutEventAttributes: {
                    fields: {
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 1
                      },
                      scheduled_event_id: {
                        type: "int64",
                        id: 2
                      },
                      started_event_id: {
                        type: "int64",
                        id: 3
                      },
                      retry_state: {
                        type: "temporal.api.enums.v1.RetryState",
                        id: 4
                      }
                    }
                  },
                  ActivityTaskCancelRequestedEventAttributes: {
                    fields: {
                      scheduled_event_id: {
                        type: "int64",
                        id: 1
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 2
                      }
                    }
                  },
                  ActivityTaskCanceledEventAttributes: {
                    fields: {
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      },
                      latest_cancel_requested_event_id: {
                        type: "int64",
                        id: 2
                      },
                      scheduled_event_id: {
                        type: "int64",
                        id: 3
                      },
                      started_event_id: {
                        type: "int64",
                        id: 4
                      },
                      identity: {
                        type: "string",
                        id: 5
                      }
                    }
                  },
                  TimerStartedEventAttributes: {
                    fields: {
                      timer_id: {
                        type: "string",
                        id: 1
                      },
                      start_to_fire_timeout: {
                        type: "google.protobuf.Duration",
                        id: 2,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 3
                      }
                    }
                  },
                  TimerFiredEventAttributes: {
                    fields: {
                      timer_id: {
                        type: "string",
                        id: 1
                      },
                      started_event_id: {
                        type: "int64",
                        id: 2
                      }
                    }
                  },
                  TimerCanceledEventAttributes: {
                    fields: {
                      timer_id: {
                        type: "string",
                        id: 1
                      },
                      started_event_id: {
                        type: "int64",
                        id: 2
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 3
                      },
                      identity: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  WorkflowExecutionCancelRequestedEventAttributes: {
                    fields: {
                      cause: {
                        type: "string",
                        id: 1
                      },
                      external_initiated_event_id: {
                        type: "int64",
                        id: 2
                      },
                      external_workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      },
                      identity: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  WorkflowExecutionCanceledEventAttributes: {
                    fields: {
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 1
                      },
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      }
                    }
                  },
                  MarkerRecordedEventAttributes: {
                    fields: {
                      marker_name: {
                        type: "string",
                        id: 1
                      },
                      details: {
                        keyType: "string",
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 3
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 4
                      },
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 5
                      }
                    }
                  },
                  WorkflowExecutionSignaledEventAttributes: {
                    fields: {
                      signal_name: {
                        type: "string",
                        id: 1
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 4
                      }
                    }
                  },
                  WorkflowExecutionTerminatedEventAttributes: {
                    fields: {
                      reason: {
                        type: "string",
                        id: 1
                      },
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  RequestCancelExternalWorkflowExecutionInitiatedEventAttributes: {
                    fields: {
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 1
                      },
                      namespace: {
                        type: "string",
                        id: 2
                      },
                      namespace_id: {
                        type: "string",
                        id: 7
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      },
                      control: {
                        type: "string",
                        id: 4
                      },
                      child_workflow_only: {
                        type: "bool",
                        id: 5
                      },
                      reason: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  RequestCancelExternalWorkflowExecutionFailedEventAttributes: {
                    fields: {
                      cause: {
                        type: "temporal.api.enums.v1.CancelExternalWorkflowExecutionFailedCause",
                        id: 1
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 2
                      },
                      namespace: {
                        type: "string",
                        id: 3
                      },
                      namespace_id: {
                        type: "string",
                        id: 7
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 4
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 5
                      },
                      control: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  ExternalWorkflowExecutionCancelRequestedEventAttributes: {
                    fields: {
                      initiated_event_id: {
                        type: "int64",
                        id: 1
                      },
                      namespace: {
                        type: "string",
                        id: 2
                      },
                      namespace_id: {
                        type: "string",
                        id: 4
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      }
                    }
                  },
                  SignalExternalWorkflowExecutionInitiatedEventAttributes: {
                    fields: {
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 1
                      },
                      namespace: {
                        type: "string",
                        id: 2
                      },
                      namespace_id: {
                        type: "string",
                        id: 9
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      },
                      signal_name: {
                        type: "string",
                        id: 4
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 5
                      },
                      control: {
                        type: "string",
                        id: 6
                      },
                      child_workflow_only: {
                        type: "bool",
                        id: 7
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 8
                      }
                    }
                  },
                  SignalExternalWorkflowExecutionFailedEventAttributes: {
                    fields: {
                      cause: {
                        type: "temporal.api.enums.v1.SignalExternalWorkflowExecutionFailedCause",
                        id: 1
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 2
                      },
                      namespace: {
                        type: "string",
                        id: 3
                      },
                      namespace_id: {
                        type: "string",
                        id: 7
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 4
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 5
                      },
                      control: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  ExternalWorkflowExecutionSignaledEventAttributes: {
                    fields: {
                      initiated_event_id: {
                        type: "int64",
                        id: 1
                      },
                      namespace: {
                        type: "string",
                        id: 2
                      },
                      namespace_id: {
                        type: "string",
                        id: 5
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      },
                      control: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  UpsertWorkflowSearchAttributesEventAttributes: {
                    fields: {
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 1
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 2
                      }
                    }
                  },
                  StartChildWorkflowExecutionInitiatedEventAttributes: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      namespace_id: {
                        type: "string",
                        id: 18
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 4
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 5
                      },
                      workflow_execution_timeout: {
                        type: "google.protobuf.Duration",
                        id: 6,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_run_timeout: {
                        type: "google.protobuf.Duration",
                        id: 7,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_timeout: {
                        type: "google.protobuf.Duration",
                        id: 8,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      parent_close_policy: {
                        type: "temporal.api.enums.v1.ParentClosePolicy",
                        id: 9
                      },
                      control: {
                        type: "string",
                        id: 10
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 11
                      },
                      workflow_id_reuse_policy: {
                        type: "temporal.api.enums.v1.WorkflowIdReusePolicy",
                        id: 12
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 13
                      },
                      cron_schedule: {
                        type: "string",
                        id: 14
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 15
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 16
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 17
                      }
                    }
                  },
                  StartChildWorkflowExecutionFailedEventAttributes: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      namespace_id: {
                        type: "string",
                        id: 8
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      cause: {
                        type: "temporal.api.enums.v1.StartChildWorkflowExecutionFailedCause",
                        id: 4
                      },
                      control: {
                        type: "string",
                        id: 5
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 6
                      },
                      workflow_task_completed_event_id: {
                        type: "int64",
                        id: 7
                      }
                    }
                  },
                  ChildWorkflowExecutionStartedEventAttributes: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      namespace_id: {
                        type: "string",
                        id: 6
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 2
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 4
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 5
                      }
                    }
                  },
                  ChildWorkflowExecutionCompletedEventAttributes: {
                    fields: {
                      result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      },
                      namespace: {
                        type: "string",
                        id: 2
                      },
                      namespace_id: {
                        type: "string",
                        id: 7
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 4
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 5
                      },
                      started_event_id: {
                        type: "int64",
                        id: 6
                      }
                    }
                  },
                  ChildWorkflowExecutionFailedEventAttributes: {
                    fields: {
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 1
                      },
                      namespace: {
                        type: "string",
                        id: 2
                      },
                      namespace_id: {
                        type: "string",
                        id: 8
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 4
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 5
                      },
                      started_event_id: {
                        type: "int64",
                        id: 6
                      },
                      retry_state: {
                        type: "temporal.api.enums.v1.RetryState",
                        id: 7
                      }
                    }
                  },
                  ChildWorkflowExecutionCanceledEventAttributes: {
                    fields: {
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      },
                      namespace: {
                        type: "string",
                        id: 2
                      },
                      namespace_id: {
                        type: "string",
                        id: 7
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 3
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 4
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 5
                      },
                      started_event_id: {
                        type: "int64",
                        id: 6
                      }
                    }
                  },
                  ChildWorkflowExecutionTimedOutEventAttributes: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      namespace_id: {
                        type: "string",
                        id: 7
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 4
                      },
                      started_event_id: {
                        type: "int64",
                        id: 5
                      },
                      retry_state: {
                        type: "temporal.api.enums.v1.RetryState",
                        id: 6
                      }
                    }
                  },
                  ChildWorkflowExecutionTerminatedEventAttributes: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      namespace_id: {
                        type: "string",
                        id: 6
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 4
                      },
                      started_event_id: {
                        type: "int64",
                        id: 5
                      }
                    }
                  },
                  HistoryEvent: {
                    oneofs: {
                      attributes: {
                        oneof: [
                          "workflow_execution_started_event_attributes",
                          "workflow_execution_completed_event_attributes",
                          "workflow_execution_failed_event_attributes",
                          "workflow_execution_timed_out_event_attributes",
                          "workflow_task_scheduled_event_attributes",
                          "workflow_task_started_event_attributes",
                          "workflow_task_completed_event_attributes",
                          "workflow_task_timed_out_event_attributes",
                          "workflow_task_failed_event_attributes",
                          "activity_task_scheduled_event_attributes",
                          "activity_task_started_event_attributes",
                          "activity_task_completed_event_attributes",
                          "activity_task_failed_event_attributes",
                          "activity_task_timed_out_event_attributes",
                          "timer_started_event_attributes",
                          "timer_fired_event_attributes",
                          "activity_task_cancel_requested_event_attributes",
                          "activity_task_canceled_event_attributes",
                          "timer_canceled_event_attributes",
                          "marker_recorded_event_attributes",
                          "workflow_execution_signaled_event_attributes",
                          "workflow_execution_terminated_event_attributes",
                          "workflow_execution_cancel_requested_event_attributes",
                          "workflow_execution_canceled_event_attributes",
                          "request_cancel_external_workflow_execution_initiated_event_attributes",
                          "request_cancel_external_workflow_execution_failed_event_attributes",
                          "external_workflow_execution_cancel_requested_event_attributes",
                          "workflow_execution_continued_as_new_event_attributes",
                          "start_child_workflow_execution_initiated_event_attributes",
                          "start_child_workflow_execution_failed_event_attributes",
                          "child_workflow_execution_started_event_attributes",
                          "child_workflow_execution_completed_event_attributes",
                          "child_workflow_execution_failed_event_attributes",
                          "child_workflow_execution_canceled_event_attributes",
                          "child_workflow_execution_timed_out_event_attributes",
                          "child_workflow_execution_terminated_event_attributes",
                          "signal_external_workflow_execution_initiated_event_attributes",
                          "signal_external_workflow_execution_failed_event_attributes",
                          "external_workflow_execution_signaled_event_attributes",
                          "upsert_workflow_search_attributes_event_attributes"
                        ]
                      }
                    },
                    fields: {
                      event_id: {
                        type: "int64",
                        id: 1
                      },
                      event_time: {
                        type: "google.protobuf.Timestamp",
                        id: 2,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      event_type: {
                        type: "temporal.api.enums.v1.EventType",
                        id: 3
                      },
                      version: {
                        type: "int64",
                        id: 4
                      },
                      task_id: {
                        type: "int64",
                        id: 5
                      },
                      workflow_execution_started_event_attributes: {
                        type: "WorkflowExecutionStartedEventAttributes",
                        id: 6
                      },
                      workflow_execution_completed_event_attributes: {
                        type: "WorkflowExecutionCompletedEventAttributes",
                        id: 7
                      },
                      workflow_execution_failed_event_attributes: {
                        type: "WorkflowExecutionFailedEventAttributes",
                        id: 8
                      },
                      workflow_execution_timed_out_event_attributes: {
                        type: "WorkflowExecutionTimedOutEventAttributes",
                        id: 9
                      },
                      workflow_task_scheduled_event_attributes: {
                        type: "WorkflowTaskScheduledEventAttributes",
                        id: 10
                      },
                      workflow_task_started_event_attributes: {
                        type: "WorkflowTaskStartedEventAttributes",
                        id: 11
                      },
                      workflow_task_completed_event_attributes: {
                        type: "WorkflowTaskCompletedEventAttributes",
                        id: 12
                      },
                      workflow_task_timed_out_event_attributes: {
                        type: "WorkflowTaskTimedOutEventAttributes",
                        id: 13
                      },
                      workflow_task_failed_event_attributes: {
                        type: "WorkflowTaskFailedEventAttributes",
                        id: 14
                      },
                      activity_task_scheduled_event_attributes: {
                        type: "ActivityTaskScheduledEventAttributes",
                        id: 15
                      },
                      activity_task_started_event_attributes: {
                        type: "ActivityTaskStartedEventAttributes",
                        id: 16
                      },
                      activity_task_completed_event_attributes: {
                        type: "ActivityTaskCompletedEventAttributes",
                        id: 17
                      },
                      activity_task_failed_event_attributes: {
                        type: "ActivityTaskFailedEventAttributes",
                        id: 18
                      },
                      activity_task_timed_out_event_attributes: {
                        type: "ActivityTaskTimedOutEventAttributes",
                        id: 19
                      },
                      timer_started_event_attributes: {
                        type: "TimerStartedEventAttributes",
                        id: 20
                      },
                      timer_fired_event_attributes: {
                        type: "TimerFiredEventAttributes",
                        id: 21
                      },
                      activity_task_cancel_requested_event_attributes: {
                        type: "ActivityTaskCancelRequestedEventAttributes",
                        id: 22
                      },
                      activity_task_canceled_event_attributes: {
                        type: "ActivityTaskCanceledEventAttributes",
                        id: 23
                      },
                      timer_canceled_event_attributes: {
                        type: "TimerCanceledEventAttributes",
                        id: 24
                      },
                      marker_recorded_event_attributes: {
                        type: "MarkerRecordedEventAttributes",
                        id: 25
                      },
                      workflow_execution_signaled_event_attributes: {
                        type: "WorkflowExecutionSignaledEventAttributes",
                        id: 26
                      },
                      workflow_execution_terminated_event_attributes: {
                        type: "WorkflowExecutionTerminatedEventAttributes",
                        id: 27
                      },
                      workflow_execution_cancel_requested_event_attributes: {
                        type: "WorkflowExecutionCancelRequestedEventAttributes",
                        id: 28
                      },
                      workflow_execution_canceled_event_attributes: {
                        type: "WorkflowExecutionCanceledEventAttributes",
                        id: 29
                      },
                      request_cancel_external_workflow_execution_initiated_event_attributes: {
                        type: "RequestCancelExternalWorkflowExecutionInitiatedEventAttributes",
                        id: 30
                      },
                      request_cancel_external_workflow_execution_failed_event_attributes: {
                        type: "RequestCancelExternalWorkflowExecutionFailedEventAttributes",
                        id: 31
                      },
                      external_workflow_execution_cancel_requested_event_attributes: {
                        type: "ExternalWorkflowExecutionCancelRequestedEventAttributes",
                        id: 32
                      },
                      workflow_execution_continued_as_new_event_attributes: {
                        type: "WorkflowExecutionContinuedAsNewEventAttributes",
                        id: 33
                      },
                      start_child_workflow_execution_initiated_event_attributes: {
                        type: "StartChildWorkflowExecutionInitiatedEventAttributes",
                        id: 34
                      },
                      start_child_workflow_execution_failed_event_attributes: {
                        type: "StartChildWorkflowExecutionFailedEventAttributes",
                        id: 35
                      },
                      child_workflow_execution_started_event_attributes: {
                        type: "ChildWorkflowExecutionStartedEventAttributes",
                        id: 36
                      },
                      child_workflow_execution_completed_event_attributes: {
                        type: "ChildWorkflowExecutionCompletedEventAttributes",
                        id: 37
                      },
                      child_workflow_execution_failed_event_attributes: {
                        type: "ChildWorkflowExecutionFailedEventAttributes",
                        id: 38
                      },
                      child_workflow_execution_canceled_event_attributes: {
                        type: "ChildWorkflowExecutionCanceledEventAttributes",
                        id: 39
                      },
                      child_workflow_execution_timed_out_event_attributes: {
                        type: "ChildWorkflowExecutionTimedOutEventAttributes",
                        id: 40
                      },
                      child_workflow_execution_terminated_event_attributes: {
                        type: "ChildWorkflowExecutionTerminatedEventAttributes",
                        id: 41
                      },
                      signal_external_workflow_execution_initiated_event_attributes: {
                        type: "SignalExternalWorkflowExecutionInitiatedEventAttributes",
                        id: 42
                      },
                      signal_external_workflow_execution_failed_event_attributes: {
                        type: "SignalExternalWorkflowExecutionFailedEventAttributes",
                        id: 43
                      },
                      external_workflow_execution_signaled_event_attributes: {
                        type: "ExternalWorkflowExecutionSignaledEventAttributes",
                        id: 44
                      },
                      upsert_workflow_search_attributes_event_attributes: {
                        type: "UpsertWorkflowSearchAttributesEventAttributes",
                        id: 45
                      }
                    }
                  },
                  History: {
                    fields: {
                      events: {
                        rule: "repeated",
                        type: "HistoryEvent",
                        id: 1
                      }
                    }
                  }
                }
              }
            }
          },
          command: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/command/v1;command",
                  java_package: "io.temporal.api.command.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Command::V1",
                  csharp_namespace: "Temporal.Api.Command.V1"
                },
                nested: {
                  ScheduleActivityTaskCommandAttributes: {
                    fields: {
                      activity_id: {
                        type: "string",
                        id: 1
                      },
                      activity_type: {
                        type: "temporal.api.common.v1.ActivityType",
                        id: 2
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 4
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 5
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 6
                      },
                      schedule_to_close_timeout: {
                        type: "google.protobuf.Duration",
                        id: 7,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      schedule_to_start_timeout: {
                        type: "google.protobuf.Duration",
                        id: 8,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      start_to_close_timeout: {
                        type: "google.protobuf.Duration",
                        id: 9,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      heartbeat_timeout: {
                        type: "google.protobuf.Duration",
                        id: 10,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 11
                      },
                      request_eager_execution: {
                        type: "bool",
                        id: 12
                      }
                    },
                    reserved: [
                      [
                        3,
                        3
                      ]
                    ]
                  },
                  RequestCancelActivityTaskCommandAttributes: {
                    fields: {
                      scheduled_event_id: {
                        type: "int64",
                        id: 1
                      }
                    }
                  },
                  StartTimerCommandAttributes: {
                    fields: {
                      timer_id: {
                        type: "string",
                        id: 1
                      },
                      start_to_fire_timeout: {
                        type: "google.protobuf.Duration",
                        id: 2,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      }
                    }
                  },
                  CompleteWorkflowExecutionCommandAttributes: {
                    fields: {
                      result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      }
                    }
                  },
                  FailWorkflowExecutionCommandAttributes: {
                    fields: {
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 1
                      }
                    }
                  },
                  CancelTimerCommandAttributes: {
                    fields: {
                      timer_id: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  CancelWorkflowExecutionCommandAttributes: {
                    fields: {
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      }
                    }
                  },
                  RequestCancelExternalWorkflowExecutionCommandAttributes: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      run_id: {
                        type: "string",
                        id: 3
                      },
                      control: {
                        type: "string",
                        id: 4
                      },
                      child_workflow_only: {
                        type: "bool",
                        id: 5
                      },
                      reason: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  SignalExternalWorkflowExecutionCommandAttributes: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      signal_name: {
                        type: "string",
                        id: 3
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 4
                      },
                      control: {
                        type: "string",
                        id: 5
                      },
                      child_workflow_only: {
                        type: "bool",
                        id: 6
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 7
                      }
                    }
                  },
                  UpsertWorkflowSearchAttributesCommandAttributes: {
                    fields: {
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 1
                      }
                    }
                  },
                  RecordMarkerCommandAttributes: {
                    fields: {
                      marker_name: {
                        type: "string",
                        id: 1
                      },
                      details: {
                        keyType: "string",
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 3
                      },
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 4
                      }
                    }
                  },
                  ContinueAsNewWorkflowExecutionCommandAttributes: {
                    fields: {
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 1
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 2
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 3
                      },
                      workflow_run_timeout: {
                        type: "google.protobuf.Duration",
                        id: 4,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_timeout: {
                        type: "google.protobuf.Duration",
                        id: 5,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      backoff_start_interval: {
                        type: "google.protobuf.Duration",
                        id: 6,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 7
                      },
                      initiator: {
                        type: "temporal.api.enums.v1.ContinueAsNewInitiator",
                        id: 8
                      },
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 9
                      },
                      last_completion_result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 10
                      },
                      cron_schedule: {
                        type: "string",
                        id: 11
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 12
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 13
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 14
                      }
                    }
                  },
                  StartChildWorkflowExecutionCommandAttributes: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 4
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 5
                      },
                      workflow_execution_timeout: {
                        type: "google.protobuf.Duration",
                        id: 6,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_run_timeout: {
                        type: "google.protobuf.Duration",
                        id: 7,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_timeout: {
                        type: "google.protobuf.Duration",
                        id: 8,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      parent_close_policy: {
                        type: "temporal.api.enums.v1.ParentClosePolicy",
                        id: 9
                      },
                      control: {
                        type: "string",
                        id: 10
                      },
                      workflow_id_reuse_policy: {
                        type: "temporal.api.enums.v1.WorkflowIdReusePolicy",
                        id: 11
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 12
                      },
                      cron_schedule: {
                        type: "string",
                        id: 13
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 14
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 15
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 16
                      }
                    }
                  },
                  Command: {
                    oneofs: {
                      attributes: {
                        oneof: [
                          "schedule_activity_task_command_attributes",
                          "start_timer_command_attributes",
                          "complete_workflow_execution_command_attributes",
                          "fail_workflow_execution_command_attributes",
                          "request_cancel_activity_task_command_attributes",
                          "cancel_timer_command_attributes",
                          "cancel_workflow_execution_command_attributes",
                          "request_cancel_external_workflow_execution_command_attributes",
                          "record_marker_command_attributes",
                          "continue_as_new_workflow_execution_command_attributes",
                          "start_child_workflow_execution_command_attributes",
                          "signal_external_workflow_execution_command_attributes",
                          "upsert_workflow_search_attributes_command_attributes"
                        ]
                      }
                    },
                    fields: {
                      command_type: {
                        type: "temporal.api.enums.v1.CommandType",
                        id: 1
                      },
                      schedule_activity_task_command_attributes: {
                        type: "ScheduleActivityTaskCommandAttributes",
                        id: 2
                      },
                      start_timer_command_attributes: {
                        type: "StartTimerCommandAttributes",
                        id: 3
                      },
                      complete_workflow_execution_command_attributes: {
                        type: "CompleteWorkflowExecutionCommandAttributes",
                        id: 4
                      },
                      fail_workflow_execution_command_attributes: {
                        type: "FailWorkflowExecutionCommandAttributes",
                        id: 5
                      },
                      request_cancel_activity_task_command_attributes: {
                        type: "RequestCancelActivityTaskCommandAttributes",
                        id: 6
                      },
                      cancel_timer_command_attributes: {
                        type: "CancelTimerCommandAttributes",
                        id: 7
                      },
                      cancel_workflow_execution_command_attributes: {
                        type: "CancelWorkflowExecutionCommandAttributes",
                        id: 8
                      },
                      request_cancel_external_workflow_execution_command_attributes: {
                        type: "RequestCancelExternalWorkflowExecutionCommandAttributes",
                        id: 9
                      },
                      record_marker_command_attributes: {
                        type: "RecordMarkerCommandAttributes",
                        id: 10
                      },
                      continue_as_new_workflow_execution_command_attributes: {
                        type: "ContinueAsNewWorkflowExecutionCommandAttributes",
                        id: 11
                      },
                      start_child_workflow_execution_command_attributes: {
                        type: "StartChildWorkflowExecutionCommandAttributes",
                        id: 12
                      },
                      signal_external_workflow_execution_command_attributes: {
                        type: "SignalExternalWorkflowExecutionCommandAttributes",
                        id: 13
                      },
                      upsert_workflow_search_attributes_command_attributes: {
                        type: "UpsertWorkflowSearchAttributesCommandAttributes",
                        id: 14
                      }
                    }
                  }
                }
              }
            }
          },
          workflow: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/workflow/v1;workflow",
                  java_package: "io.temporal.api.workflow.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Workflow::V1",
                  csharp_namespace: "Temporal.Api.Workflow.V1"
                },
                nested: {
                  WorkflowExecutionInfo: {
                    fields: {
                      execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 1
                      },
                      type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 2
                      },
                      start_time: {
                        type: "google.protobuf.Timestamp",
                        id: 3,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      close_time: {
                        type: "google.protobuf.Timestamp",
                        id: 4,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      status: {
                        type: "temporal.api.enums.v1.WorkflowExecutionStatus",
                        id: 5
                      },
                      history_length: {
                        type: "int64",
                        id: 6
                      },
                      parent_namespace_id: {
                        type: "string",
                        id: 7
                      },
                      parent_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 8
                      },
                      execution_time: {
                        type: "google.protobuf.Timestamp",
                        id: 9,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 10
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 11
                      },
                      auto_reset_points: {
                        type: "ResetPoints",
                        id: 12
                      },
                      task_queue: {
                        type: "string",
                        id: 13
                      },
                      state_transition_count: {
                        type: "int64",
                        id: 14
                      }
                    }
                  },
                  WorkflowExecutionConfig: {
                    fields: {
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 1
                      },
                      workflow_execution_timeout: {
                        type: "google.protobuf.Duration",
                        id: 2,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_run_timeout: {
                        type: "google.protobuf.Duration",
                        id: 3,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      default_workflow_task_timeout: {
                        type: "google.protobuf.Duration",
                        id: 4,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      }
                    }
                  },
                  PendingActivityInfo: {
                    fields: {
                      activity_id: {
                        type: "string",
                        id: 1
                      },
                      activity_type: {
                        type: "temporal.api.common.v1.ActivityType",
                        id: 2
                      },
                      state: {
                        type: "temporal.api.enums.v1.PendingActivityState",
                        id: 3
                      },
                      heartbeat_details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 4
                      },
                      last_heartbeat_time: {
                        type: "google.protobuf.Timestamp",
                        id: 5,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      last_started_time: {
                        type: "google.protobuf.Timestamp",
                        id: 6,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      attempt: {
                        type: "int32",
                        id: 7
                      },
                      maximum_attempts: {
                        type: "int32",
                        id: 8
                      },
                      scheduled_time: {
                        type: "google.protobuf.Timestamp",
                        id: 9,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      expiration_time: {
                        type: "google.protobuf.Timestamp",
                        id: 10,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      last_failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 11
                      },
                      last_worker_identity: {
                        type: "string",
                        id: 12
                      }
                    }
                  },
                  PendingChildExecutionInfo: {
                    fields: {
                      workflow_id: {
                        type: "string",
                        id: 1
                      },
                      run_id: {
                        type: "string",
                        id: 2
                      },
                      workflow_type_name: {
                        type: "string",
                        id: 3
                      },
                      initiated_id: {
                        type: "int64",
                        id: 4
                      },
                      parent_close_policy: {
                        type: "temporal.api.enums.v1.ParentClosePolicy",
                        id: 5
                      }
                    }
                  },
                  PendingWorkflowTaskInfo: {
                    fields: {
                      state: {
                        type: "temporal.api.enums.v1.PendingWorkflowTaskState",
                        id: 1
                      },
                      scheduled_time: {
                        type: "google.protobuf.Timestamp",
                        id: 2,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      original_scheduled_time: {
                        type: "google.protobuf.Timestamp",
                        id: 3,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      started_time: {
                        type: "google.protobuf.Timestamp",
                        id: 4,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      attempt: {
                        type: "int32",
                        id: 5
                      }
                    }
                  },
                  ResetPoints: {
                    fields: {
                      points: {
                        rule: "repeated",
                        type: "ResetPointInfo",
                        id: 1
                      }
                    }
                  },
                  ResetPointInfo: {
                    fields: {
                      binary_checksum: {
                        type: "string",
                        id: 1
                      },
                      run_id: {
                        type: "string",
                        id: 2
                      },
                      first_workflow_task_completed_id: {
                        type: "int64",
                        id: 3
                      },
                      create_time: {
                        type: "google.protobuf.Timestamp",
                        id: 4,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      expire_time: {
                        type: "google.protobuf.Timestamp",
                        id: 5,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      resettable: {
                        type: "bool",
                        id: 6
                      }
                    }
                  },
                  NewWorkflowExecutionInfo: {
                    fields: {
                      workflow_id: {
                        type: "string",
                        id: 1
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 2
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 3
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 4
                      },
                      workflow_execution_timeout: {
                        type: "google.protobuf.Duration",
                        id: 5,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_run_timeout: {
                        type: "google.protobuf.Duration",
                        id: 6,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_timeout: {
                        type: "google.protobuf.Duration",
                        id: 7,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_id_reuse_policy: {
                        type: "temporal.api.enums.v1.WorkflowIdReusePolicy",
                        id: 8
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 9
                      },
                      cron_schedule: {
                        type: "string",
                        id: 10
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 11
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 12
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 13
                      }
                    }
                  }
                }
              }
            }
          },
          errordetails: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/errordetails/v1;errordetails",
                  java_package: "io.temporal.api.errordetails.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::ErrorDetails::V1",
                  csharp_namespace: "Temporal.Api.ErrorDetails.V1"
                },
                nested: {
                  NotFoundFailure: {
                    fields: {
                      current_cluster: {
                        type: "string",
                        id: 1
                      },
                      active_cluster: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  WorkflowExecutionAlreadyStartedFailure: {
                    fields: {
                      start_request_id: {
                        type: "string",
                        id: 1
                      },
                      run_id: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  NamespaceNotActiveFailure: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      current_cluster: {
                        type: "string",
                        id: 2
                      },
                      active_cluster: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  NamespaceInvalidStateFailure: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      state: {
                        type: "temporal.api.enums.v1.NamespaceState",
                        id: 2
                      },
                      allowed_states: {
                        rule: "repeated",
                        type: "temporal.api.enums.v1.NamespaceState",
                        id: 3
                      }
                    }
                  },
                  NamespaceNotFoundFailure: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  NamespaceAlreadyExistsFailure: {
                    fields: {}
                  },
                  ClientVersionNotSupportedFailure: {
                    fields: {
                      client_version: {
                        type: "string",
                        id: 1
                      },
                      client_name: {
                        type: "string",
                        id: 2
                      },
                      supported_versions: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  ServerVersionNotSupportedFailure: {
                    fields: {
                      server_version: {
                        type: "string",
                        id: 1
                      },
                      client_supported_server_versions: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  CancellationAlreadyRequestedFailure: {
                    fields: {}
                  },
                  QueryFailedFailure: {
                    fields: {}
                  },
                  PermissionDeniedFailure: {
                    fields: {
                      reason: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  ResourceExhaustedFailure: {
                    fields: {
                      cause: {
                        type: "temporal.api.enums.v1.ResourceExhaustedCause",
                        id: 1
                      }
                    }
                  },
                  SystemWorkflowFailure: {
                    fields: {
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 1
                      },
                      workflow_error: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  WorkflowNotReadyFailure: {
                    fields: {}
                  }
                }
              }
            }
          },
          schedule: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/schedule/v1;schedule",
                  java_package: "io.temporal.api.schedule.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Schedule::V1",
                  csharp_namespace: "Temporal.Api.Schedule.V1"
                },
                nested: {
                  CalendarSpec: {
                    fields: {
                      second: {
                        type: "string",
                        id: 1
                      },
                      minute: {
                        type: "string",
                        id: 2
                      },
                      hour: {
                        type: "string",
                        id: 3
                      },
                      day_of_month: {
                        type: "string",
                        id: 4
                      },
                      month: {
                        type: "string",
                        id: 5
                      },
                      year: {
                        type: "string",
                        id: 6
                      },
                      day_of_week: {
                        type: "string",
                        id: 7
                      }
                    }
                  },
                  IntervalSpec: {
                    fields: {
                      interval: {
                        type: "google.protobuf.Duration",
                        id: 1,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      phase: {
                        type: "google.protobuf.Duration",
                        id: 2,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      }
                    }
                  },
                  ScheduleSpec: {
                    fields: {
                      calendar: {
                        rule: "repeated",
                        type: "CalendarSpec",
                        id: 1
                      },
                      interval: {
                        rule: "repeated",
                        type: "IntervalSpec",
                        id: 2
                      },
                      exclude_calendar: {
                        rule: "repeated",
                        type: "CalendarSpec",
                        id: 3
                      },
                      start_time: {
                        type: "google.protobuf.Timestamp",
                        id: 4,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      end_time: {
                        type: "google.protobuf.Timestamp",
                        id: 5,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      jitter: {
                        type: "google.protobuf.Duration",
                        id: 6,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      timezone_name: {
                        type: "string",
                        id: 10
                      },
                      timezone_data: {
                        type: "bytes",
                        id: 11
                      }
                    }
                  },
                  SchedulePolicies: {
                    fields: {
                      overlap_policy: {
                        type: "temporal.api.enums.v1.ScheduleOverlapPolicy",
                        id: 1
                      },
                      catchup_window: {
                        type: "google.protobuf.Duration",
                        id: 2,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      pause_on_failure: {
                        type: "bool",
                        id: 3
                      }
                    }
                  },
                  ScheduleAction: {
                    oneofs: {
                      action: {
                        oneof: [
                          "start_workflow"
                        ]
                      }
                    },
                    fields: {
                      start_workflow: {
                        type: "temporal.api.workflow.v1.NewWorkflowExecutionInfo",
                        id: 1
                      }
                    }
                  },
                  ScheduleActionResult: {
                    fields: {
                      schedule_time: {
                        type: "google.protobuf.Timestamp",
                        id: 1,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      actual_time: {
                        type: "google.protobuf.Timestamp",
                        id: 2,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      start_workflow_result: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 11
                      }
                    }
                  },
                  ScheduleState: {
                    fields: {
                      notes: {
                        type: "string",
                        id: 1
                      },
                      paused: {
                        type: "bool",
                        id: 2
                      },
                      limited_actions: {
                        type: "bool",
                        id: 3
                      },
                      remaining_actions: {
                        type: "int64",
                        id: 4
                      }
                    }
                  },
                  TriggerImmediatelyRequest: {
                    fields: {
                      overlap_policy: {
                        type: "temporal.api.enums.v1.ScheduleOverlapPolicy",
                        id: 1
                      }
                    }
                  },
                  BackfillRequest: {
                    fields: {
                      start_time: {
                        type: "google.protobuf.Timestamp",
                        id: 1,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      end_time: {
                        type: "google.protobuf.Timestamp",
                        id: 2,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      overlap_policy: {
                        type: "temporal.api.enums.v1.ScheduleOverlapPolicy",
                        id: 3
                      }
                    }
                  },
                  SchedulePatch: {
                    fields: {
                      trigger_immediately: {
                        type: "TriggerImmediatelyRequest",
                        id: 1
                      },
                      backfill_request: {
                        rule: "repeated",
                        type: "BackfillRequest",
                        id: 2
                      },
                      pause: {
                        type: "string",
                        id: 3
                      },
                      unpause: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  ScheduleInfo: {
                    fields: {
                      action_count: {
                        type: "int64",
                        id: 1
                      },
                      missed_catchup_window: {
                        type: "int64",
                        id: 2
                      },
                      overlap_skipped: {
                        type: "int64",
                        id: 3
                      },
                      running_workflows: {
                        rule: "repeated",
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 9
                      },
                      recent_actions: {
                        rule: "repeated",
                        type: "ScheduleActionResult",
                        id: 4
                      },
                      future_action_times: {
                        rule: "repeated",
                        type: "google.protobuf.Timestamp",
                        id: 5,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      create_time: {
                        type: "google.protobuf.Timestamp",
                        id: 6,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      update_time: {
                        type: "google.protobuf.Timestamp",
                        id: 7,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      invalid_schedule_error: {
                        type: "string",
                        id: 8
                      }
                    }
                  },
                  Schedule: {
                    fields: {
                      spec: {
                        type: "ScheduleSpec",
                        id: 1
                      },
                      action: {
                        type: "ScheduleAction",
                        id: 2
                      },
                      policies: {
                        type: "SchedulePolicies",
                        id: 3
                      },
                      state: {
                        type: "ScheduleState",
                        id: 4
                      }
                    }
                  },
                  ScheduleListInfo: {
                    fields: {
                      spec: {
                        type: "ScheduleSpec",
                        id: 1
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 2
                      },
                      notes: {
                        type: "string",
                        id: 3
                      },
                      paused: {
                        type: "bool",
                        id: 4
                      },
                      recent_actions: {
                        rule: "repeated",
                        type: "ScheduleActionResult",
                        id: 5
                      },
                      future_action_times: {
                        rule: "repeated",
                        type: "google.protobuf.Timestamp",
                        id: 6,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      }
                    }
                  },
                  ScheduleListEntry: {
                    fields: {
                      schedule_id: {
                        type: "string",
                        id: 1
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 2
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 3
                      },
                      info: {
                        type: "ScheduleListInfo",
                        id: 4
                      }
                    }
                  }
                }
              }
            }
          },
          workflowservice: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/workflowservice/v1;workflowservice",
                  java_package: "io.temporal.api.workflowservice.v1",
                  java_multiple_files: true,
                  java_outer_classname: "RequestResponseProto",
                  ruby_package: "Temporal::Api::WorkflowService::V1",
                  csharp_namespace: "Temporal.Api.WorkflowService.V1"
                },
                nested: {
                  WorkflowService: {
                    methods: {
                      RegisterNamespace: {
                        requestType: "RegisterNamespaceRequest",
                        responseType: "RegisterNamespaceResponse"
                      },
                      DescribeNamespace: {
                        requestType: "DescribeNamespaceRequest",
                        responseType: "DescribeNamespaceResponse"
                      },
                      ListNamespaces: {
                        requestType: "ListNamespacesRequest",
                        responseType: "ListNamespacesResponse"
                      },
                      UpdateNamespace: {
                        requestType: "UpdateNamespaceRequest",
                        responseType: "UpdateNamespaceResponse"
                      },
                      DeprecateNamespace: {
                        requestType: "DeprecateNamespaceRequest",
                        responseType: "DeprecateNamespaceResponse"
                      },
                      StartWorkflowExecution: {
                        requestType: "StartWorkflowExecutionRequest",
                        responseType: "StartWorkflowExecutionResponse"
                      },
                      GetWorkflowExecutionHistory: {
                        requestType: "GetWorkflowExecutionHistoryRequest",
                        responseType: "GetWorkflowExecutionHistoryResponse"
                      },
                      GetWorkflowExecutionHistoryReverse: {
                        requestType: "GetWorkflowExecutionHistoryReverseRequest",
                        responseType: "GetWorkflowExecutionHistoryReverseResponse"
                      },
                      PollWorkflowTaskQueue: {
                        requestType: "PollWorkflowTaskQueueRequest",
                        responseType: "PollWorkflowTaskQueueResponse"
                      },
                      RespondWorkflowTaskCompleted: {
                        requestType: "RespondWorkflowTaskCompletedRequest",
                        responseType: "RespondWorkflowTaskCompletedResponse"
                      },
                      RespondWorkflowTaskFailed: {
                        requestType: "RespondWorkflowTaskFailedRequest",
                        responseType: "RespondWorkflowTaskFailedResponse"
                      },
                      PollActivityTaskQueue: {
                        requestType: "PollActivityTaskQueueRequest",
                        responseType: "PollActivityTaskQueueResponse"
                      },
                      RecordActivityTaskHeartbeat: {
                        requestType: "RecordActivityTaskHeartbeatRequest",
                        responseType: "RecordActivityTaskHeartbeatResponse"
                      },
                      RecordActivityTaskHeartbeatById: {
                        requestType: "RecordActivityTaskHeartbeatByIdRequest",
                        responseType: "RecordActivityTaskHeartbeatByIdResponse"
                      },
                      RespondActivityTaskCompleted: {
                        requestType: "RespondActivityTaskCompletedRequest",
                        responseType: "RespondActivityTaskCompletedResponse"
                      },
                      RespondActivityTaskCompletedById: {
                        requestType: "RespondActivityTaskCompletedByIdRequest",
                        responseType: "RespondActivityTaskCompletedByIdResponse"
                      },
                      RespondActivityTaskFailed: {
                        requestType: "RespondActivityTaskFailedRequest",
                        responseType: "RespondActivityTaskFailedResponse"
                      },
                      RespondActivityTaskFailedById: {
                        requestType: "RespondActivityTaskFailedByIdRequest",
                        responseType: "RespondActivityTaskFailedByIdResponse"
                      },
                      RespondActivityTaskCanceled: {
                        requestType: "RespondActivityTaskCanceledRequest",
                        responseType: "RespondActivityTaskCanceledResponse"
                      },
                      RespondActivityTaskCanceledById: {
                        requestType: "RespondActivityTaskCanceledByIdRequest",
                        responseType: "RespondActivityTaskCanceledByIdResponse"
                      },
                      RequestCancelWorkflowExecution: {
                        requestType: "RequestCancelWorkflowExecutionRequest",
                        responseType: "RequestCancelWorkflowExecutionResponse"
                      },
                      SignalWorkflowExecution: {
                        requestType: "SignalWorkflowExecutionRequest",
                        responseType: "SignalWorkflowExecutionResponse"
                      },
                      SignalWithStartWorkflowExecution: {
                        requestType: "SignalWithStartWorkflowExecutionRequest",
                        responseType: "SignalWithStartWorkflowExecutionResponse"
                      },
                      ResetWorkflowExecution: {
                        requestType: "ResetWorkflowExecutionRequest",
                        responseType: "ResetWorkflowExecutionResponse"
                      },
                      TerminateWorkflowExecution: {
                        requestType: "TerminateWorkflowExecutionRequest",
                        responseType: "TerminateWorkflowExecutionResponse"
                      },
                      ListOpenWorkflowExecutions: {
                        requestType: "ListOpenWorkflowExecutionsRequest",
                        responseType: "ListOpenWorkflowExecutionsResponse"
                      },
                      ListClosedWorkflowExecutions: {
                        requestType: "ListClosedWorkflowExecutionsRequest",
                        responseType: "ListClosedWorkflowExecutionsResponse"
                      },
                      ListWorkflowExecutions: {
                        requestType: "ListWorkflowExecutionsRequest",
                        responseType: "ListWorkflowExecutionsResponse"
                      },
                      ListArchivedWorkflowExecutions: {
                        requestType: "ListArchivedWorkflowExecutionsRequest",
                        responseType: "ListArchivedWorkflowExecutionsResponse"
                      },
                      ScanWorkflowExecutions: {
                        requestType: "ScanWorkflowExecutionsRequest",
                        responseType: "ScanWorkflowExecutionsResponse"
                      },
                      CountWorkflowExecutions: {
                        requestType: "CountWorkflowExecutionsRequest",
                        responseType: "CountWorkflowExecutionsResponse"
                      },
                      GetSearchAttributes: {
                        requestType: "GetSearchAttributesRequest",
                        responseType: "GetSearchAttributesResponse"
                      },
                      RespondQueryTaskCompleted: {
                        requestType: "RespondQueryTaskCompletedRequest",
                        responseType: "RespondQueryTaskCompletedResponse"
                      },
                      ResetStickyTaskQueue: {
                        requestType: "ResetStickyTaskQueueRequest",
                        responseType: "ResetStickyTaskQueueResponse"
                      },
                      QueryWorkflow: {
                        requestType: "QueryWorkflowRequest",
                        responseType: "QueryWorkflowResponse"
                      },
                      DescribeWorkflowExecution: {
                        requestType: "DescribeWorkflowExecutionRequest",
                        responseType: "DescribeWorkflowExecutionResponse"
                      },
                      DescribeTaskQueue: {
                        requestType: "DescribeTaskQueueRequest",
                        responseType: "DescribeTaskQueueResponse"
                      },
                      GetClusterInfo: {
                        requestType: "GetClusterInfoRequest",
                        responseType: "GetClusterInfoResponse"
                      },
                      GetSystemInfo: {
                        requestType: "GetSystemInfoRequest",
                        responseType: "GetSystemInfoResponse"
                      },
                      ListTaskQueuePartitions: {
                        requestType: "ListTaskQueuePartitionsRequest",
                        responseType: "ListTaskQueuePartitionsResponse"
                      },
                      CreateSchedule: {
                        requestType: "CreateScheduleRequest",
                        responseType: "CreateScheduleResponse"
                      },
                      DescribeSchedule: {
                        requestType: "DescribeScheduleRequest",
                        responseType: "DescribeScheduleResponse"
                      },
                      UpdateSchedule: {
                        requestType: "UpdateScheduleRequest",
                        responseType: "UpdateScheduleResponse"
                      },
                      PatchSchedule: {
                        requestType: "PatchScheduleRequest",
                        responseType: "PatchScheduleResponse"
                      },
                      ListScheduleMatchingTimes: {
                        requestType: "ListScheduleMatchingTimesRequest",
                        responseType: "ListScheduleMatchingTimesResponse"
                      },
                      DeleteSchedule: {
                        requestType: "DeleteScheduleRequest",
                        responseType: "DeleteScheduleResponse"
                      },
                      ListSchedules: {
                        requestType: "ListSchedulesRequest",
                        responseType: "ListSchedulesResponse"
                      },
                      UpdateWorkerBuildIdOrdering: {
                        requestType: "UpdateWorkerBuildIdOrderingRequest",
                        responseType: "UpdateWorkerBuildIdOrderingResponse"
                      },
                      GetWorkerBuildIdOrdering: {
                        requestType: "GetWorkerBuildIdOrderingRequest",
                        responseType: "GetWorkerBuildIdOrderingResponse"
                      }
                    }
                  },
                  RegisterNamespaceRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      description: {
                        type: "string",
                        id: 2
                      },
                      owner_email: {
                        type: "string",
                        id: 3
                      },
                      workflow_execution_retention_period: {
                        type: "google.protobuf.Duration",
                        id: 4,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      clusters: {
                        rule: "repeated",
                        type: "temporal.api.replication.v1.ClusterReplicationConfig",
                        id: 5
                      },
                      active_cluster_name: {
                        type: "string",
                        id: 6
                      },
                      data: {
                        keyType: "string",
                        type: "string",
                        id: 7
                      },
                      security_token: {
                        type: "string",
                        id: 8
                      },
                      is_global_namespace: {
                        type: "bool",
                        id: 9
                      },
                      history_archival_state: {
                        type: "temporal.api.enums.v1.ArchivalState",
                        id: 10
                      },
                      history_archival_uri: {
                        type: "string",
                        id: 11
                      },
                      visibility_archival_state: {
                        type: "temporal.api.enums.v1.ArchivalState",
                        id: 12
                      },
                      visibility_archival_uri: {
                        type: "string",
                        id: 13
                      }
                    }
                  },
                  RegisterNamespaceResponse: {
                    fields: {}
                  },
                  ListNamespacesRequest: {
                    fields: {
                      page_size: {
                        type: "int32",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      },
                      namespace_filter: {
                        type: "temporal.api.namespace.v1.NamespaceFilter",
                        id: 3
                      }
                    }
                  },
                  ListNamespacesResponse: {
                    fields: {
                      namespaces: {
                        rule: "repeated",
                        type: "DescribeNamespaceResponse",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  DescribeNamespaceRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      id: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  DescribeNamespaceResponse: {
                    fields: {
                      namespace_info: {
                        type: "temporal.api.namespace.v1.NamespaceInfo",
                        id: 1
                      },
                      config: {
                        type: "temporal.api.namespace.v1.NamespaceConfig",
                        id: 2
                      },
                      replication_config: {
                        type: "temporal.api.replication.v1.NamespaceReplicationConfig",
                        id: 3
                      },
                      failover_version: {
                        type: "int64",
                        id: 4
                      },
                      is_global_namespace: {
                        type: "bool",
                        id: 5
                      }
                    }
                  },
                  UpdateNamespaceRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      update_info: {
                        type: "temporal.api.namespace.v1.UpdateNamespaceInfo",
                        id: 2
                      },
                      config: {
                        type: "temporal.api.namespace.v1.NamespaceConfig",
                        id: 3
                      },
                      replication_config: {
                        type: "temporal.api.replication.v1.NamespaceReplicationConfig",
                        id: 4
                      },
                      security_token: {
                        type: "string",
                        id: 5
                      },
                      delete_bad_binary: {
                        type: "string",
                        id: 6
                      },
                      promote_namespace: {
                        type: "bool",
                        id: 7
                      }
                    }
                  },
                  UpdateNamespaceResponse: {
                    fields: {
                      namespace_info: {
                        type: "temporal.api.namespace.v1.NamespaceInfo",
                        id: 1
                      },
                      config: {
                        type: "temporal.api.namespace.v1.NamespaceConfig",
                        id: 2
                      },
                      replication_config: {
                        type: "temporal.api.replication.v1.NamespaceReplicationConfig",
                        id: 3
                      },
                      failover_version: {
                        type: "int64",
                        id: 4
                      },
                      is_global_namespace: {
                        type: "bool",
                        id: 5
                      }
                    }
                  },
                  DeprecateNamespaceRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      security_token: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  DeprecateNamespaceResponse: {
                    fields: {}
                  },
                  StartWorkflowExecutionRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 4
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 5
                      },
                      workflow_execution_timeout: {
                        type: "google.protobuf.Duration",
                        id: 6,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_run_timeout: {
                        type: "google.protobuf.Duration",
                        id: 7,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_timeout: {
                        type: "google.protobuf.Duration",
                        id: 8,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      identity: {
                        type: "string",
                        id: 9
                      },
                      request_id: {
                        type: "string",
                        id: 10
                      },
                      workflow_id_reuse_policy: {
                        type: "temporal.api.enums.v1.WorkflowIdReusePolicy",
                        id: 11
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 12
                      },
                      cron_schedule: {
                        type: "string",
                        id: 13
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 14
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 15
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 16
                      }
                    }
                  },
                  StartWorkflowExecutionResponse: {
                    fields: {
                      run_id: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  GetWorkflowExecutionHistoryRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      maximum_page_size: {
                        type: "int32",
                        id: 3
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 4
                      },
                      wait_new_event: {
                        type: "bool",
                        id: 5
                      },
                      history_event_filter_type: {
                        type: "temporal.api.enums.v1.HistoryEventFilterType",
                        id: 6
                      },
                      skip_archival: {
                        type: "bool",
                        id: 7
                      }
                    }
                  },
                  GetWorkflowExecutionHistoryResponse: {
                    fields: {
                      history: {
                        type: "temporal.api.history.v1.History",
                        id: 1
                      },
                      raw_history: {
                        rule: "repeated",
                        type: "temporal.api.common.v1.DataBlob",
                        id: 2
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 3
                      },
                      archived: {
                        type: "bool",
                        id: 4
                      }
                    }
                  },
                  GetWorkflowExecutionHistoryReverseRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      maximum_page_size: {
                        type: "int32",
                        id: 3
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 4
                      }
                    }
                  },
                  GetWorkflowExecutionHistoryReverseResponse: {
                    fields: {
                      history: {
                        type: "temporal.api.history.v1.History",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 3
                      }
                    }
                  },
                  PollWorkflowTaskQueueRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      binary_checksum: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  PollWorkflowTaskQueueResponse: {
                    fields: {
                      task_token: {
                        type: "bytes",
                        id: 1
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      previous_started_event_id: {
                        type: "int64",
                        id: 4
                      },
                      started_event_id: {
                        type: "int64",
                        id: 5
                      },
                      attempt: {
                        type: "int32",
                        id: 6
                      },
                      backlog_count_hint: {
                        type: "int64",
                        id: 7
                      },
                      history: {
                        type: "temporal.api.history.v1.History",
                        id: 8
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 9
                      },
                      query: {
                        type: "temporal.api.query.v1.WorkflowQuery",
                        id: 10
                      },
                      workflow_execution_task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 11
                      },
                      scheduled_time: {
                        type: "google.protobuf.Timestamp",
                        id: 12,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      started_time: {
                        type: "google.protobuf.Timestamp",
                        id: 13,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      queries: {
                        keyType: "string",
                        type: "temporal.api.query.v1.WorkflowQuery",
                        id: 14
                      }
                    }
                  },
                  RespondWorkflowTaskCompletedRequest: {
                    fields: {
                      task_token: {
                        type: "bytes",
                        id: 1
                      },
                      commands: {
                        rule: "repeated",
                        type: "temporal.api.command.v1.Command",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      sticky_attributes: {
                        type: "temporal.api.taskqueue.v1.StickyExecutionAttributes",
                        id: 4
                      },
                      return_new_workflow_task: {
                        type: "bool",
                        id: 5
                      },
                      force_create_new_workflow_task: {
                        type: "bool",
                        id: 6
                      },
                      binary_checksum: {
                        type: "string",
                        id: 7
                      },
                      query_results: {
                        keyType: "string",
                        type: "temporal.api.query.v1.WorkflowQueryResult",
                        id: 8
                      },
                      namespace: {
                        type: "string",
                        id: 9
                      }
                    }
                  },
                  RespondWorkflowTaskCompletedResponse: {
                    fields: {
                      workflow_task: {
                        type: "PollWorkflowTaskQueueResponse",
                        id: 1
                      },
                      activity_tasks: {
                        rule: "repeated",
                        type: "PollActivityTaskQueueResponse",
                        id: 2
                      }
                    }
                  },
                  RespondWorkflowTaskFailedRequest: {
                    fields: {
                      task_token: {
                        type: "bytes",
                        id: 1
                      },
                      cause: {
                        type: "temporal.api.enums.v1.WorkflowTaskFailedCause",
                        id: 2
                      },
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 3
                      },
                      identity: {
                        type: "string",
                        id: 4
                      },
                      binary_checksum: {
                        type: "string",
                        id: 5
                      },
                      namespace: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  RespondWorkflowTaskFailedResponse: {
                    fields: {}
                  },
                  PollActivityTaskQueueRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      task_queue_metadata: {
                        type: "temporal.api.taskqueue.v1.TaskQueueMetadata",
                        id: 4
                      }
                    }
                  },
                  PollActivityTaskQueueResponse: {
                    fields: {
                      task_token: {
                        type: "bytes",
                        id: 1
                      },
                      workflow_namespace: {
                        type: "string",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 4
                      },
                      activity_type: {
                        type: "temporal.api.common.v1.ActivityType",
                        id: 5
                      },
                      activity_id: {
                        type: "string",
                        id: 6
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 7
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 8
                      },
                      heartbeat_details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 9
                      },
                      scheduled_time: {
                        type: "google.protobuf.Timestamp",
                        id: 10,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      current_attempt_scheduled_time: {
                        type: "google.protobuf.Timestamp",
                        id: 11,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      started_time: {
                        type: "google.protobuf.Timestamp",
                        id: 12,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      attempt: {
                        type: "int32",
                        id: 13
                      },
                      schedule_to_close_timeout: {
                        type: "google.protobuf.Duration",
                        id: 14,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      start_to_close_timeout: {
                        type: "google.protobuf.Duration",
                        id: 15,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      heartbeat_timeout: {
                        type: "google.protobuf.Duration",
                        id: 16,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 17
                      }
                    }
                  },
                  RecordActivityTaskHeartbeatRequest: {
                    fields: {
                      task_token: {
                        type: "bytes",
                        id: 1
                      },
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      namespace: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  RecordActivityTaskHeartbeatResponse: {
                    fields: {
                      cancel_requested: {
                        type: "bool",
                        id: 1
                      }
                    }
                  },
                  RecordActivityTaskHeartbeatByIdRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      run_id: {
                        type: "string",
                        id: 3
                      },
                      activity_id: {
                        type: "string",
                        id: 4
                      },
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 5
                      },
                      identity: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  RecordActivityTaskHeartbeatByIdResponse: {
                    fields: {
                      cancel_requested: {
                        type: "bool",
                        id: 1
                      }
                    }
                  },
                  RespondActivityTaskCompletedRequest: {
                    fields: {
                      task_token: {
                        type: "bytes",
                        id: 1
                      },
                      result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      namespace: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  RespondActivityTaskCompletedResponse: {
                    fields: {}
                  },
                  RespondActivityTaskCompletedByIdRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      run_id: {
                        type: "string",
                        id: 3
                      },
                      activity_id: {
                        type: "string",
                        id: 4
                      },
                      result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 5
                      },
                      identity: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  RespondActivityTaskCompletedByIdResponse: {
                    fields: {}
                  },
                  RespondActivityTaskFailedRequest: {
                    fields: {
                      task_token: {
                        type: "bytes",
                        id: 1
                      },
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      namespace: {
                        type: "string",
                        id: 4
                      },
                      last_heartbeat_details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 5
                      }
                    }
                  },
                  RespondActivityTaskFailedResponse: {
                    fields: {
                      failures: {
                        rule: "repeated",
                        type: "temporal.api.failure.v1.Failure",
                        id: 1
                      }
                    }
                  },
                  RespondActivityTaskFailedByIdRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      run_id: {
                        type: "string",
                        id: 3
                      },
                      activity_id: {
                        type: "string",
                        id: 4
                      },
                      failure: {
                        type: "temporal.api.failure.v1.Failure",
                        id: 5
                      },
                      identity: {
                        type: "string",
                        id: 6
                      },
                      last_heartbeat_details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 7
                      }
                    }
                  },
                  RespondActivityTaskFailedByIdResponse: {
                    fields: {
                      failures: {
                        rule: "repeated",
                        type: "temporal.api.failure.v1.Failure",
                        id: 1
                      }
                    }
                  },
                  RespondActivityTaskCanceledRequest: {
                    fields: {
                      task_token: {
                        type: "bytes",
                        id: 1
                      },
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      namespace: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  RespondActivityTaskCanceledResponse: {
                    fields: {}
                  },
                  RespondActivityTaskCanceledByIdRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      run_id: {
                        type: "string",
                        id: 3
                      },
                      activity_id: {
                        type: "string",
                        id: 4
                      },
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 5
                      },
                      identity: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  RespondActivityTaskCanceledByIdResponse: {
                    fields: {}
                  },
                  RequestCancelWorkflowExecutionRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      request_id: {
                        type: "string",
                        id: 4
                      },
                      first_execution_run_id: {
                        type: "string",
                        id: 5
                      },
                      reason: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  RequestCancelWorkflowExecutionResponse: {
                    fields: {}
                  },
                  SignalWorkflowExecutionRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      signal_name: {
                        type: "string",
                        id: 3
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 4
                      },
                      identity: {
                        type: "string",
                        id: 5
                      },
                      request_id: {
                        type: "string",
                        id: 6
                      },
                      control: {
                        type: "string",
                        id: 7
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 8
                      }
                    }
                  },
                  SignalWorkflowExecutionResponse: {
                    fields: {}
                  },
                  SignalWithStartWorkflowExecutionRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_id: {
                        type: "string",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 4
                      },
                      input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 5
                      },
                      workflow_execution_timeout: {
                        type: "google.protobuf.Duration",
                        id: 6,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_run_timeout: {
                        type: "google.protobuf.Duration",
                        id: 7,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      workflow_task_timeout: {
                        type: "google.protobuf.Duration",
                        id: 8,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      identity: {
                        type: "string",
                        id: 9
                      },
                      request_id: {
                        type: "string",
                        id: 10
                      },
                      workflow_id_reuse_policy: {
                        type: "temporal.api.enums.v1.WorkflowIdReusePolicy",
                        id: 11
                      },
                      signal_name: {
                        type: "string",
                        id: 12
                      },
                      signal_input: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 13
                      },
                      control: {
                        type: "string",
                        id: 14
                      },
                      retry_policy: {
                        type: "temporal.api.common.v1.RetryPolicy",
                        id: 15
                      },
                      cron_schedule: {
                        type: "string",
                        id: 16
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 17
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 18
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 19
                      }
                    }
                  },
                  SignalWithStartWorkflowExecutionResponse: {
                    fields: {
                      run_id: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  ResetWorkflowExecutionRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      reason: {
                        type: "string",
                        id: 3
                      },
                      workflow_task_finish_event_id: {
                        type: "int64",
                        id: 4
                      },
                      request_id: {
                        type: "string",
                        id: 5
                      },
                      reset_reapply_type: {
                        type: "temporal.api.enums.v1.ResetReapplyType",
                        id: 6
                      }
                    }
                  },
                  ResetWorkflowExecutionResponse: {
                    fields: {
                      run_id: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  TerminateWorkflowExecutionRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      reason: {
                        type: "string",
                        id: 3
                      },
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 4
                      },
                      identity: {
                        type: "string",
                        id: 5
                      },
                      first_execution_run_id: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  TerminateWorkflowExecutionResponse: {
                    fields: {}
                  },
                  ListOpenWorkflowExecutionsRequest: {
                    oneofs: {
                      filters: {
                        oneof: [
                          "execution_filter",
                          "type_filter"
                        ]
                      }
                    },
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      maximum_page_size: {
                        type: "int32",
                        id: 2
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 3
                      },
                      start_time_filter: {
                        type: "temporal.api.filter.v1.StartTimeFilter",
                        id: 4
                      },
                      execution_filter: {
                        type: "temporal.api.filter.v1.WorkflowExecutionFilter",
                        id: 5
                      },
                      type_filter: {
                        type: "temporal.api.filter.v1.WorkflowTypeFilter",
                        id: 6
                      }
                    }
                  },
                  ListOpenWorkflowExecutionsResponse: {
                    fields: {
                      executions: {
                        rule: "repeated",
                        type: "temporal.api.workflow.v1.WorkflowExecutionInfo",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  ListClosedWorkflowExecutionsRequest: {
                    oneofs: {
                      filters: {
                        oneof: [
                          "execution_filter",
                          "type_filter",
                          "status_filter"
                        ]
                      }
                    },
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      maximum_page_size: {
                        type: "int32",
                        id: 2
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 3
                      },
                      start_time_filter: {
                        type: "temporal.api.filter.v1.StartTimeFilter",
                        id: 4
                      },
                      execution_filter: {
                        type: "temporal.api.filter.v1.WorkflowExecutionFilter",
                        id: 5
                      },
                      type_filter: {
                        type: "temporal.api.filter.v1.WorkflowTypeFilter",
                        id: 6
                      },
                      status_filter: {
                        type: "temporal.api.filter.v1.StatusFilter",
                        id: 7
                      }
                    }
                  },
                  ListClosedWorkflowExecutionsResponse: {
                    fields: {
                      executions: {
                        rule: "repeated",
                        type: "temporal.api.workflow.v1.WorkflowExecutionInfo",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  ListWorkflowExecutionsRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      page_size: {
                        type: "int32",
                        id: 2
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 3
                      },
                      query: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  ListWorkflowExecutionsResponse: {
                    fields: {
                      executions: {
                        rule: "repeated",
                        type: "temporal.api.workflow.v1.WorkflowExecutionInfo",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  ListArchivedWorkflowExecutionsRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      page_size: {
                        type: "int32",
                        id: 2
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 3
                      },
                      query: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  ListArchivedWorkflowExecutionsResponse: {
                    fields: {
                      executions: {
                        rule: "repeated",
                        type: "temporal.api.workflow.v1.WorkflowExecutionInfo",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  ScanWorkflowExecutionsRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      page_size: {
                        type: "int32",
                        id: 2
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 3
                      },
                      query: {
                        type: "string",
                        id: 4
                      }
                    }
                  },
                  ScanWorkflowExecutionsResponse: {
                    fields: {
                      executions: {
                        rule: "repeated",
                        type: "temporal.api.workflow.v1.WorkflowExecutionInfo",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  CountWorkflowExecutionsRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      query: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  CountWorkflowExecutionsResponse: {
                    fields: {
                      count: {
                        type: "int64",
                        id: 1
                      }
                    }
                  },
                  GetSearchAttributesRequest: {
                    fields: {}
                  },
                  GetSearchAttributesResponse: {
                    fields: {
                      keys: {
                        keyType: "string",
                        type: "temporal.api.enums.v1.IndexedValueType",
                        id: 1
                      }
                    }
                  },
                  RespondQueryTaskCompletedRequest: {
                    fields: {
                      task_token: {
                        type: "bytes",
                        id: 1
                      },
                      completed_type: {
                        type: "temporal.api.enums.v1.QueryResultType",
                        id: 2
                      },
                      query_result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 3
                      },
                      error_message: {
                        type: "string",
                        id: 4
                      },
                      namespace: {
                        type: "string",
                        id: 6
                      }
                    },
                    reserved: [
                      [
                        5,
                        5
                      ]
                    ]
                  },
                  RespondQueryTaskCompletedResponse: {
                    fields: {}
                  },
                  ResetStickyTaskQueueRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      }
                    }
                  },
                  ResetStickyTaskQueueResponse: {
                    fields: {}
                  },
                  QueryWorkflowRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      query: {
                        type: "temporal.api.query.v1.WorkflowQuery",
                        id: 3
                      },
                      query_reject_condition: {
                        type: "temporal.api.enums.v1.QueryRejectCondition",
                        id: 4
                      }
                    }
                  },
                  QueryWorkflowResponse: {
                    fields: {
                      query_result: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      },
                      query_rejected: {
                        type: "temporal.api.query.v1.QueryRejected",
                        id: 2
                      }
                    }
                  },
                  DescribeWorkflowExecutionRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      }
                    }
                  },
                  DescribeWorkflowExecutionResponse: {
                    fields: {
                      execution_config: {
                        type: "temporal.api.workflow.v1.WorkflowExecutionConfig",
                        id: 1
                      },
                      workflow_execution_info: {
                        type: "temporal.api.workflow.v1.WorkflowExecutionInfo",
                        id: 2
                      },
                      pending_activities: {
                        rule: "repeated",
                        type: "temporal.api.workflow.v1.PendingActivityInfo",
                        id: 3
                      },
                      pending_children: {
                        rule: "repeated",
                        type: "temporal.api.workflow.v1.PendingChildExecutionInfo",
                        id: 4
                      },
                      pending_workflow_task: {
                        type: "temporal.api.workflow.v1.PendingWorkflowTaskInfo",
                        id: 5
                      }
                    }
                  },
                  DescribeTaskQueueRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 2
                      },
                      task_queue_type: {
                        type: "temporal.api.enums.v1.TaskQueueType",
                        id: 3
                      },
                      include_task_queue_status: {
                        type: "bool",
                        id: 4
                      }
                    }
                  },
                  DescribeTaskQueueResponse: {
                    fields: {
                      pollers: {
                        rule: "repeated",
                        type: "temporal.api.taskqueue.v1.PollerInfo",
                        id: 1
                      },
                      task_queue_status: {
                        type: "temporal.api.taskqueue.v1.TaskQueueStatus",
                        id: 2
                      }
                    }
                  },
                  GetClusterInfoRequest: {
                    fields: {}
                  },
                  GetClusterInfoResponse: {
                    fields: {
                      supported_clients: {
                        keyType: "string",
                        type: "string",
                        id: 1
                      },
                      server_version: {
                        type: "string",
                        id: 2
                      },
                      cluster_id: {
                        type: "string",
                        id: 3
                      },
                      version_info: {
                        type: "temporal.api.version.v1.VersionInfo",
                        id: 4
                      },
                      cluster_name: {
                        type: "string",
                        id: 5
                      },
                      history_shard_count: {
                        type: "int32",
                        id: 6
                      },
                      persistence_store: {
                        type: "string",
                        id: 7
                      },
                      visibility_store: {
                        type: "string",
                        id: 8
                      }
                    }
                  },
                  GetSystemInfoRequest: {
                    fields: {}
                  },
                  GetSystemInfoResponse: {
                    fields: {
                      server_version: {
                        type: "string",
                        id: 1
                      },
                      capabilities: {
                        type: "Capabilities",
                        id: 2
                      }
                    },
                    nested: {
                      Capabilities: {
                        fields: {
                          signal_and_query_header: {
                            type: "bool",
                            id: 1
                          },
                          internal_error_differentiation: {
                            type: "bool",
                            id: 2
                          },
                          activity_failure_include_heartbeat: {
                            type: "bool",
                            id: 3
                          },
                          supports_schedules: {
                            type: "bool",
                            id: 4
                          }
                        }
                      }
                    }
                  },
                  ListTaskQueuePartitionsRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      task_queue: {
                        type: "temporal.api.taskqueue.v1.TaskQueue",
                        id: 2
                      }
                    }
                  },
                  ListTaskQueuePartitionsResponse: {
                    fields: {
                      activity_task_queue_partitions: {
                        rule: "repeated",
                        type: "temporal.api.taskqueue.v1.TaskQueuePartitionMetadata",
                        id: 1
                      },
                      workflow_task_queue_partitions: {
                        rule: "repeated",
                        type: "temporal.api.taskqueue.v1.TaskQueuePartitionMetadata",
                        id: 2
                      }
                    }
                  },
                  CreateScheduleRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      schedule_id: {
                        type: "string",
                        id: 2
                      },
                      schedule: {
                        type: "temporal.api.schedule.v1.Schedule",
                        id: 3
                      },
                      initial_patch: {
                        type: "temporal.api.schedule.v1.SchedulePatch",
                        id: 4
                      },
                      identity: {
                        type: "string",
                        id: 5
                      },
                      request_id: {
                        type: "string",
                        id: 6
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 7
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 8
                      }
                    }
                  },
                  CreateScheduleResponse: {
                    fields: {
                      conflict_token: {
                        type: "bytes",
                        id: 1
                      }
                    }
                  },
                  DescribeScheduleRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      schedule_id: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  DescribeScheduleResponse: {
                    fields: {
                      schedule: {
                        type: "temporal.api.schedule.v1.Schedule",
                        id: 1
                      },
                      info: {
                        type: "temporal.api.schedule.v1.ScheduleInfo",
                        id: 2
                      },
                      memo: {
                        type: "temporal.api.common.v1.Memo",
                        id: 3
                      },
                      search_attributes: {
                        type: "temporal.api.common.v1.SearchAttributes",
                        id: 4
                      },
                      conflict_token: {
                        type: "bytes",
                        id: 5
                      }
                    }
                  },
                  UpdateScheduleRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      schedule_id: {
                        type: "string",
                        id: 2
                      },
                      schedule: {
                        type: "temporal.api.schedule.v1.Schedule",
                        id: 3
                      },
                      conflict_token: {
                        type: "bytes",
                        id: 4
                      },
                      identity: {
                        type: "string",
                        id: 5
                      },
                      request_id: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  UpdateScheduleResponse: {
                    fields: {}
                  },
                  PatchScheduleRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      schedule_id: {
                        type: "string",
                        id: 2
                      },
                      patch: {
                        type: "temporal.api.schedule.v1.SchedulePatch",
                        id: 3
                      },
                      identity: {
                        type: "string",
                        id: 4
                      },
                      request_id: {
                        type: "string",
                        id: 5
                      }
                    }
                  },
                  PatchScheduleResponse: {
                    fields: {}
                  },
                  ListScheduleMatchingTimesRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      schedule_id: {
                        type: "string",
                        id: 2
                      },
                      start_time: {
                        type: "google.protobuf.Timestamp",
                        id: 3,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      end_time: {
                        type: "google.protobuf.Timestamp",
                        id: 4,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      }
                    }
                  },
                  ListScheduleMatchingTimesResponse: {
                    fields: {
                      start_time: {
                        rule: "repeated",
                        type: "google.protobuf.Timestamp",
                        id: 1,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      }
                    }
                  },
                  DeleteScheduleRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      schedule_id: {
                        type: "string",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  DeleteScheduleResponse: {
                    fields: {}
                  },
                  ListSchedulesRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      maximum_page_size: {
                        type: "int32",
                        id: 2
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 3
                      }
                    }
                  },
                  ListSchedulesResponse: {
                    fields: {
                      schedules: {
                        rule: "repeated",
                        type: "temporal.api.schedule.v1.ScheduleListEntry",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  UpdateWorkerBuildIdOrderingRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      task_queue: {
                        type: "string",
                        id: 2
                      },
                      version_id: {
                        type: "temporal.api.taskqueue.v1.VersionId",
                        id: 3
                      },
                      previous_compatible: {
                        type: "temporal.api.taskqueue.v1.VersionId",
                        id: 4
                      },
                      become_default: {
                        type: "bool",
                        id: 5
                      }
                    }
                  },
                  UpdateWorkerBuildIdOrderingResponse: {
                    fields: {}
                  },
                  GetWorkerBuildIdOrderingRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      task_queue: {
                        type: "string",
                        id: 2
                      },
                      max_depth: {
                        type: "int32",
                        id: 3
                      }
                    }
                  },
                  GetWorkerBuildIdOrderingResponse: {
                    fields: {
                      current_default: {
                        type: "temporal.api.taskqueue.v1.VersionIdNode",
                        id: 1
                      },
                      compatible_leaves: {
                        rule: "repeated",
                        type: "temporal.api.taskqueue.v1.VersionIdNode",
                        id: 2
                      }
                    }
                  }
                }
              }
            }
          },
          enums: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/enums/v1;enums",
                  java_package: "io.temporal.api.enums.v1",
                  java_multiple_files: true,
                  java_outer_classname: "ClusterProto",
                  ruby_package: "Temporal::Api::Enums::V1",
                  csharp_namespace: "Temporal.Api.Enums.V1"
                },
                nested: {
                  NamespaceState: {
                    values: {
                      NAMESPACE_STATE_UNSPECIFIED: 0,
                      NAMESPACE_STATE_REGISTERED: 1,
                      NAMESPACE_STATE_DEPRECATED: 2,
                      NAMESPACE_STATE_DELETED: 3
                    }
                  },
                  ArchivalState: {
                    values: {
                      ARCHIVAL_STATE_UNSPECIFIED: 0,
                      ARCHIVAL_STATE_DISABLED: 1,
                      ARCHIVAL_STATE_ENABLED: 2
                    }
                  },
                  ReplicationState: {
                    values: {
                      REPLICATION_STATE_UNSPECIFIED: 0,
                      REPLICATION_STATE_NORMAL: 1,
                      REPLICATION_STATE_HANDOVER: 2
                    }
                  },
                  QueryResultType: {
                    values: {
                      QUERY_RESULT_TYPE_UNSPECIFIED: 0,
                      QUERY_RESULT_TYPE_ANSWERED: 1,
                      QUERY_RESULT_TYPE_FAILED: 2
                    }
                  },
                  QueryRejectCondition: {
                    values: {
                      QUERY_REJECT_CONDITION_UNSPECIFIED: 0,
                      QUERY_REJECT_CONDITION_NONE: 1,
                      QUERY_REJECT_CONDITION_NOT_OPEN: 2,
                      QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY: 3
                    }
                  },
                  EventType: {
                    values: {
                      EVENT_TYPE_UNSPECIFIED: 0,
                      EVENT_TYPE_WORKFLOW_EXECUTION_STARTED: 1,
                      EVENT_TYPE_WORKFLOW_EXECUTION_COMPLETED: 2,
                      EVENT_TYPE_WORKFLOW_EXECUTION_FAILED: 3,
                      EVENT_TYPE_WORKFLOW_EXECUTION_TIMED_OUT: 4,
                      EVENT_TYPE_WORKFLOW_TASK_SCHEDULED: 5,
                      EVENT_TYPE_WORKFLOW_TASK_STARTED: 6,
                      EVENT_TYPE_WORKFLOW_TASK_COMPLETED: 7,
                      EVENT_TYPE_WORKFLOW_TASK_TIMED_OUT: 8,
                      EVENT_TYPE_WORKFLOW_TASK_FAILED: 9,
                      EVENT_TYPE_ACTIVITY_TASK_SCHEDULED: 10,
                      EVENT_TYPE_ACTIVITY_TASK_STARTED: 11,
                      EVENT_TYPE_ACTIVITY_TASK_COMPLETED: 12,
                      EVENT_TYPE_ACTIVITY_TASK_FAILED: 13,
                      EVENT_TYPE_ACTIVITY_TASK_TIMED_OUT: 14,
                      EVENT_TYPE_ACTIVITY_TASK_CANCEL_REQUESTED: 15,
                      EVENT_TYPE_ACTIVITY_TASK_CANCELED: 16,
                      EVENT_TYPE_TIMER_STARTED: 17,
                      EVENT_TYPE_TIMER_FIRED: 18,
                      EVENT_TYPE_TIMER_CANCELED: 19,
                      EVENT_TYPE_WORKFLOW_EXECUTION_CANCEL_REQUESTED: 20,
                      EVENT_TYPE_WORKFLOW_EXECUTION_CANCELED: 21,
                      EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED: 22,
                      EVENT_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED: 23,
                      EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_CANCEL_REQUESTED: 24,
                      EVENT_TYPE_MARKER_RECORDED: 25,
                      EVENT_TYPE_WORKFLOW_EXECUTION_SIGNALED: 26,
                      EVENT_TYPE_WORKFLOW_EXECUTION_TERMINATED: 27,
                      EVENT_TYPE_WORKFLOW_EXECUTION_CONTINUED_AS_NEW: 28,
                      EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_INITIATED: 29,
                      EVENT_TYPE_START_CHILD_WORKFLOW_EXECUTION_FAILED: 30,
                      EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_STARTED: 31,
                      EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_COMPLETED: 32,
                      EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_FAILED: 33,
                      EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_CANCELED: 34,
                      EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TIMED_OUT: 35,
                      EVENT_TYPE_CHILD_WORKFLOW_EXECUTION_TERMINATED: 36,
                      EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_INITIATED: 37,
                      EVENT_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED: 38,
                      EVENT_TYPE_EXTERNAL_WORKFLOW_EXECUTION_SIGNALED: 39,
                      EVENT_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES: 40
                    }
                  },
                  TaskQueueKind: {
                    values: {
                      TASK_QUEUE_KIND_UNSPECIFIED: 0,
                      TASK_QUEUE_KIND_NORMAL: 1,
                      TASK_QUEUE_KIND_STICKY: 2
                    }
                  },
                  TaskQueueType: {
                    values: {
                      TASK_QUEUE_TYPE_UNSPECIFIED: 0,
                      TASK_QUEUE_TYPE_WORKFLOW: 1,
                      TASK_QUEUE_TYPE_ACTIVITY: 2
                    }
                  },
                  CommandType: {
                    values: {
                      COMMAND_TYPE_UNSPECIFIED: 0,
                      COMMAND_TYPE_SCHEDULE_ACTIVITY_TASK: 1,
                      COMMAND_TYPE_REQUEST_CANCEL_ACTIVITY_TASK: 2,
                      COMMAND_TYPE_START_TIMER: 3,
                      COMMAND_TYPE_COMPLETE_WORKFLOW_EXECUTION: 4,
                      COMMAND_TYPE_FAIL_WORKFLOW_EXECUTION: 5,
                      COMMAND_TYPE_CANCEL_TIMER: 6,
                      COMMAND_TYPE_CANCEL_WORKFLOW_EXECUTION: 7,
                      COMMAND_TYPE_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION: 8,
                      COMMAND_TYPE_RECORD_MARKER: 9,
                      COMMAND_TYPE_CONTINUE_AS_NEW_WORKFLOW_EXECUTION: 10,
                      COMMAND_TYPE_START_CHILD_WORKFLOW_EXECUTION: 11,
                      COMMAND_TYPE_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION: 12,
                      COMMAND_TYPE_UPSERT_WORKFLOW_SEARCH_ATTRIBUTES: 13
                    }
                  },
                  WorkflowIdReusePolicy: {
                    values: {
                      WORKFLOW_ID_REUSE_POLICY_UNSPECIFIED: 0,
                      WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE: 1,
                      WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY: 2,
                      WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE: 3,
                      WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING: 4
                    }
                  },
                  ParentClosePolicy: {
                    values: {
                      PARENT_CLOSE_POLICY_UNSPECIFIED: 0,
                      PARENT_CLOSE_POLICY_TERMINATE: 1,
                      PARENT_CLOSE_POLICY_ABANDON: 2,
                      PARENT_CLOSE_POLICY_REQUEST_CANCEL: 3
                    }
                  },
                  ContinueAsNewInitiator: {
                    values: {
                      CONTINUE_AS_NEW_INITIATOR_UNSPECIFIED: 0,
                      CONTINUE_AS_NEW_INITIATOR_WORKFLOW: 1,
                      CONTINUE_AS_NEW_INITIATOR_RETRY: 2,
                      CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE: 3
                    }
                  },
                  WorkflowExecutionStatus: {
                    values: {
                      WORKFLOW_EXECUTION_STATUS_UNSPECIFIED: 0,
                      WORKFLOW_EXECUTION_STATUS_RUNNING: 1,
                      WORKFLOW_EXECUTION_STATUS_COMPLETED: 2,
                      WORKFLOW_EXECUTION_STATUS_FAILED: 3,
                      WORKFLOW_EXECUTION_STATUS_CANCELED: 4,
                      WORKFLOW_EXECUTION_STATUS_TERMINATED: 5,
                      WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW: 6,
                      WORKFLOW_EXECUTION_STATUS_TIMED_OUT: 7
                    }
                  },
                  PendingActivityState: {
                    values: {
                      PENDING_ACTIVITY_STATE_UNSPECIFIED: 0,
                      PENDING_ACTIVITY_STATE_SCHEDULED: 1,
                      PENDING_ACTIVITY_STATE_STARTED: 2,
                      PENDING_ACTIVITY_STATE_CANCEL_REQUESTED: 3
                    }
                  },
                  PendingWorkflowTaskState: {
                    values: {
                      PENDING_WORKFLOW_TASK_STATE_UNSPECIFIED: 0,
                      PENDING_WORKFLOW_TASK_STATE_SCHEDULED: 1,
                      PENDING_WORKFLOW_TASK_STATE_STARTED: 2
                    }
                  },
                  HistoryEventFilterType: {
                    values: {
                      HISTORY_EVENT_FILTER_TYPE_UNSPECIFIED: 0,
                      HISTORY_EVENT_FILTER_TYPE_ALL_EVENT: 1,
                      HISTORY_EVENT_FILTER_TYPE_CLOSE_EVENT: 2
                    }
                  },
                  RetryState: {
                    values: {
                      RETRY_STATE_UNSPECIFIED: 0,
                      RETRY_STATE_IN_PROGRESS: 1,
                      RETRY_STATE_NON_RETRYABLE_FAILURE: 2,
                      RETRY_STATE_TIMEOUT: 3,
                      RETRY_STATE_MAXIMUM_ATTEMPTS_REACHED: 4,
                      RETRY_STATE_RETRY_POLICY_NOT_SET: 5,
                      RETRY_STATE_INTERNAL_SERVER_ERROR: 6,
                      RETRY_STATE_CANCEL_REQUESTED: 7
                    }
                  },
                  TimeoutType: {
                    values: {
                      TIMEOUT_TYPE_UNSPECIFIED: 0,
                      TIMEOUT_TYPE_START_TO_CLOSE: 1,
                      TIMEOUT_TYPE_SCHEDULE_TO_START: 2,
                      TIMEOUT_TYPE_SCHEDULE_TO_CLOSE: 3,
                      TIMEOUT_TYPE_HEARTBEAT: 4
                    }
                  },
                  WorkflowTaskFailedCause: {
                    values: {
                      WORKFLOW_TASK_FAILED_CAUSE_UNSPECIFIED: 0,
                      WORKFLOW_TASK_FAILED_CAUSE_UNHANDLED_COMMAND: 1,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_SCHEDULE_ACTIVITY_ATTRIBUTES: 2,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_ACTIVITY_ATTRIBUTES: 3,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_START_TIMER_ATTRIBUTES: 4,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_CANCEL_TIMER_ATTRIBUTES: 5,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_RECORD_MARKER_ATTRIBUTES: 6,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_COMPLETE_WORKFLOW_EXECUTION_ATTRIBUTES: 7,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_FAIL_WORKFLOW_EXECUTION_ATTRIBUTES: 8,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_CANCEL_WORKFLOW_EXECUTION_ATTRIBUTES: 9,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_ATTRIBUTES: 10,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_CONTINUE_AS_NEW_ATTRIBUTES: 11,
                      WORKFLOW_TASK_FAILED_CAUSE_START_TIMER_DUPLICATE_ID: 12,
                      WORKFLOW_TASK_FAILED_CAUSE_RESET_STICKY_TASK_QUEUE: 13,
                      WORKFLOW_TASK_FAILED_CAUSE_WORKFLOW_WORKER_UNHANDLED_FAILURE: 14,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_SIGNAL_WORKFLOW_EXECUTION_ATTRIBUTES: 15,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_START_CHILD_EXECUTION_ATTRIBUTES: 16,
                      WORKFLOW_TASK_FAILED_CAUSE_FORCE_CLOSE_COMMAND: 17,
                      WORKFLOW_TASK_FAILED_CAUSE_FAILOVER_CLOSE_COMMAND: 18,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_SIGNAL_INPUT_SIZE: 19,
                      WORKFLOW_TASK_FAILED_CAUSE_RESET_WORKFLOW: 20,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_BINARY: 21,
                      WORKFLOW_TASK_FAILED_CAUSE_SCHEDULE_ACTIVITY_DUPLICATE_ID: 22,
                      WORKFLOW_TASK_FAILED_CAUSE_BAD_SEARCH_ATTRIBUTES: 23,
                      WORKFLOW_TASK_FAILED_CAUSE_NON_DETERMINISTIC_ERROR: 24
                    }
                  },
                  StartChildWorkflowExecutionFailedCause: {
                    values: {
                      START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED: 0,
                      START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_EXISTS: 1,
                      START_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND: 2
                    }
                  },
                  CancelExternalWorkflowExecutionFailedCause: {
                    values: {
                      CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED: 0,
                      CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_EXTERNAL_WORKFLOW_EXECUTION_NOT_FOUND: 1,
                      CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND: 2
                    }
                  },
                  SignalExternalWorkflowExecutionFailedCause: {
                    values: {
                      SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNSPECIFIED: 0,
                      SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_EXTERNAL_WORKFLOW_EXECUTION_NOT_FOUND: 1,
                      SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_NAMESPACE_NOT_FOUND: 2
                    }
                  },
                  ResourceExhaustedCause: {
                    values: {
                      RESOURCE_EXHAUSTED_CAUSE_UNSPECIFIED: 0,
                      RESOURCE_EXHAUSTED_CAUSE_RPS_LIMIT: 1,
                      RESOURCE_EXHAUSTED_CAUSE_CONCURRENT_LIMIT: 2,
                      RESOURCE_EXHAUSTED_CAUSE_SYSTEM_OVERLOADED: 3
                    }
                  },
                  ResetReapplyType: {
                    values: {
                      RESET_REAPPLY_TYPE_UNSPECIFIED: 0,
                      RESET_REAPPLY_TYPE_SIGNAL: 1,
                      RESET_REAPPLY_TYPE_NONE: 2
                    }
                  },
                  EncodingType: {
                    values: {
                      ENCODING_TYPE_UNSPECIFIED: 0,
                      ENCODING_TYPE_PROTO3: 1,
                      ENCODING_TYPE_JSON: 2
                    }
                  },
                  IndexedValueType: {
                    values: {
                      INDEXED_VALUE_TYPE_UNSPECIFIED: 0,
                      INDEXED_VALUE_TYPE_TEXT: 1,
                      INDEXED_VALUE_TYPE_KEYWORD: 2,
                      INDEXED_VALUE_TYPE_INT: 3,
                      INDEXED_VALUE_TYPE_DOUBLE: 4,
                      INDEXED_VALUE_TYPE_BOOL: 5,
                      INDEXED_VALUE_TYPE_DATETIME: 6
                    }
                  },
                  Severity: {
                    values: {
                      SEVERITY_UNSPECIFIED: 0,
                      SEVERITY_HIGH: 1,
                      SEVERITY_MEDIUM: 2,
                      SEVERITY_LOW: 3
                    }
                  },
                  ScheduleOverlapPolicy: {
                    values: {
                      SCHEDULE_OVERLAP_POLICY_UNSPECIFIED: 0,
                      SCHEDULE_OVERLAP_POLICY_SKIP: 1,
                      SCHEDULE_OVERLAP_POLICY_BUFFER_ONE: 2,
                      SCHEDULE_OVERLAP_POLICY_BUFFER_ALL: 3,
                      SCHEDULE_OVERLAP_POLICY_CANCEL_OTHER: 4,
                      SCHEDULE_OVERLAP_POLICY_TERMINATE_OTHER: 5,
                      SCHEDULE_OVERLAP_POLICY_ALLOW_ALL: 6
                    }
                  },
                  ClusterMemberRole: {
                    values: {
                      CLUSTER_MEMBER_ROLE_UNSPECIFIED: 0,
                      CLUSTER_MEMBER_ROLE_FRONTEND: 1,
                      CLUSTER_MEMBER_ROLE_HISTORY: 2,
                      CLUSTER_MEMBER_ROLE_MATCHING: 3,
                      CLUSTER_MEMBER_ROLE_WORKER: 4
                    }
                  }
                }
              }
            }
          },
          failure: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/failure/v1;failure",
                  java_package: "io.temporal.api.failure.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Failure::V1",
                  csharp_namespace: "Temporal.Api.Failure.V1"
                },
                nested: {
                  ApplicationFailureInfo: {
                    fields: {
                      type: {
                        type: "string",
                        id: 1
                      },
                      non_retryable: {
                        type: "bool",
                        id: 2
                      },
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 3
                      }
                    }
                  },
                  TimeoutFailureInfo: {
                    fields: {
                      timeout_type: {
                        type: "temporal.api.enums.v1.TimeoutType",
                        id: 1
                      },
                      last_heartbeat_details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      }
                    }
                  },
                  CanceledFailureInfo: {
                    fields: {
                      details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      }
                    }
                  },
                  TerminatedFailureInfo: {
                    fields: {}
                  },
                  ServerFailureInfo: {
                    fields: {
                      non_retryable: {
                        type: "bool",
                        id: 1
                      }
                    }
                  },
                  ResetWorkflowFailureInfo: {
                    fields: {
                      last_heartbeat_details: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 1
                      }
                    }
                  },
                  ActivityFailureInfo: {
                    fields: {
                      scheduled_event_id: {
                        type: "int64",
                        id: 1
                      },
                      started_event_id: {
                        type: "int64",
                        id: 2
                      },
                      identity: {
                        type: "string",
                        id: 3
                      },
                      activity_type: {
                        type: "temporal.api.common.v1.ActivityType",
                        id: 4
                      },
                      activity_id: {
                        type: "string",
                        id: 5
                      },
                      retry_state: {
                        type: "temporal.api.enums.v1.RetryState",
                        id: 6
                      }
                    }
                  },
                  ChildWorkflowExecutionFailureInfo: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      },
                      workflow_type: {
                        type: "temporal.api.common.v1.WorkflowType",
                        id: 3
                      },
                      initiated_event_id: {
                        type: "int64",
                        id: 4
                      },
                      started_event_id: {
                        type: "int64",
                        id: 5
                      },
                      retry_state: {
                        type: "temporal.api.enums.v1.RetryState",
                        id: 6
                      }
                    }
                  },
                  Failure: {
                    oneofs: {
                      failure_info: {
                        oneof: [
                          "application_failure_info",
                          "timeout_failure_info",
                          "canceled_failure_info",
                          "terminated_failure_info",
                          "server_failure_info",
                          "reset_workflow_failure_info",
                          "activity_failure_info",
                          "child_workflow_execution_failure_info"
                        ]
                      }
                    },
                    fields: {
                      message: {
                        type: "string",
                        id: 1
                      },
                      source: {
                        type: "string",
                        id: 2
                      },
                      stack_trace: {
                        type: "string",
                        id: 3
                      },
                      cause: {
                        type: "Failure",
                        id: 4
                      },
                      application_failure_info: {
                        type: "ApplicationFailureInfo",
                        id: 5
                      },
                      timeout_failure_info: {
                        type: "TimeoutFailureInfo",
                        id: 6
                      },
                      canceled_failure_info: {
                        type: "CanceledFailureInfo",
                        id: 7
                      },
                      terminated_failure_info: {
                        type: "TerminatedFailureInfo",
                        id: 8
                      },
                      server_failure_info: {
                        type: "ServerFailureInfo",
                        id: 9
                      },
                      reset_workflow_failure_info: {
                        type: "ResetWorkflowFailureInfo",
                        id: 10
                      },
                      activity_failure_info: {
                        type: "ActivityFailureInfo",
                        id: 11
                      },
                      child_workflow_execution_failure_info: {
                        type: "ChildWorkflowExecutionFailureInfo",
                        id: 12
                      }
                    }
                  }
                }
              }
            }
          },
          query: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/query/v1;query",
                  java_package: "io.temporal.api.query.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Query::V1",
                  csharp_namespace: "Temporal.Api.Query.V1"
                },
                nested: {
                  WorkflowQuery: {
                    fields: {
                      query_type: {
                        type: "string",
                        id: 1
                      },
                      query_args: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      },
                      header: {
                        type: "temporal.api.common.v1.Header",
                        id: 3
                      }
                    }
                  },
                  WorkflowQueryResult: {
                    fields: {
                      result_type: {
                        type: "temporal.api.enums.v1.QueryResultType",
                        id: 1
                      },
                      answer: {
                        type: "temporal.api.common.v1.Payloads",
                        id: 2
                      },
                      error_message: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  QueryRejected: {
                    fields: {
                      status: {
                        type: "temporal.api.enums.v1.WorkflowExecutionStatus",
                        id: 1
                      }
                    }
                  }
                }
              }
            }
          },
          version: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/version/v1;version",
                  java_package: "io.temporal.api.version.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Version::V1",
                  csharp_namespace: "Temporal.Api.Version.V1"
                },
                nested: {
                  ReleaseInfo: {
                    fields: {
                      version: {
                        type: "string",
                        id: 1
                      },
                      release_time: {
                        type: "google.protobuf.Timestamp",
                        id: 2,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      notes: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  Alert: {
                    fields: {
                      message: {
                        type: "string",
                        id: 1
                      },
                      severity: {
                        type: "temporal.api.enums.v1.Severity",
                        id: 2
                      }
                    }
                  },
                  VersionInfo: {
                    fields: {
                      current: {
                        type: "ReleaseInfo",
                        id: 1
                      },
                      recommended: {
                        type: "ReleaseInfo",
                        id: 2
                      },
                      instructions: {
                        type: "string",
                        id: 3
                      },
                      alerts: {
                        rule: "repeated",
                        type: "Alert",
                        id: 4
                      },
                      last_update_time: {
                        type: "google.protobuf.Timestamp",
                        id: 5,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          namespace: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/namespace/v1;namespace",
                  java_package: "io.temporal.api.namespace.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Namespace::V1",
                  csharp_namespace: "Temporal.Api.Namespace.V1"
                },
                nested: {
                  NamespaceInfo: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      state: {
                        type: "temporal.api.enums.v1.NamespaceState",
                        id: 2
                      },
                      description: {
                        type: "string",
                        id: 3
                      },
                      owner_email: {
                        type: "string",
                        id: 4
                      },
                      data: {
                        keyType: "string",
                        type: "string",
                        id: 5
                      },
                      id: {
                        type: "string",
                        id: 6
                      },
                      supports_schedules: {
                        type: "bool",
                        id: 100
                      }
                    }
                  },
                  NamespaceConfig: {
                    fields: {
                      workflow_execution_retention_ttl: {
                        type: "google.protobuf.Duration",
                        id: 1,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      bad_binaries: {
                        type: "BadBinaries",
                        id: 2
                      },
                      history_archival_state: {
                        type: "temporal.api.enums.v1.ArchivalState",
                        id: 3
                      },
                      history_archival_uri: {
                        type: "string",
                        id: 4
                      },
                      visibility_archival_state: {
                        type: "temporal.api.enums.v1.ArchivalState",
                        id: 5
                      },
                      visibility_archival_uri: {
                        type: "string",
                        id: 6
                      }
                    }
                  },
                  BadBinaries: {
                    fields: {
                      binaries: {
                        keyType: "string",
                        type: "BadBinaryInfo",
                        id: 1
                      }
                    }
                  },
                  BadBinaryInfo: {
                    fields: {
                      reason: {
                        type: "string",
                        id: 1
                      },
                      operator: {
                        type: "string",
                        id: 2
                      },
                      create_time: {
                        type: "google.protobuf.Timestamp",
                        id: 3,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      }
                    }
                  },
                  UpdateNamespaceInfo: {
                    fields: {
                      description: {
                        type: "string",
                        id: 1
                      },
                      owner_email: {
                        type: "string",
                        id: 2
                      },
                      data: {
                        keyType: "string",
                        type: "string",
                        id: 3
                      },
                      state: {
                        type: "temporal.api.enums.v1.NamespaceState",
                        id: 4
                      }
                    }
                  },
                  NamespaceFilter: {
                    fields: {
                      include_deleted: {
                        type: "bool",
                        id: 1
                      }
                    }
                  }
                }
              }
            }
          },
          filter: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/filter/v1;filter",
                  java_package: "io.temporal.api.filter.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Filter::V1",
                  csharp_namespace: "Temporal.Api.Filter.V1"
                },
                nested: {
                  WorkflowExecutionFilter: {
                    fields: {
                      workflow_id: {
                        type: "string",
                        id: 1
                      },
                      run_id: {
                        type: "string",
                        id: 2
                      }
                    }
                  },
                  WorkflowTypeFilter: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  StartTimeFilter: {
                    fields: {
                      earliest_time: {
                        type: "google.protobuf.Timestamp",
                        id: 1,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      latest_time: {
                        type: "google.protobuf.Timestamp",
                        id: 2,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      }
                    }
                  },
                  StatusFilter: {
                    fields: {
                      status: {
                        type: "temporal.api.enums.v1.WorkflowExecutionStatus",
                        id: 1
                      }
                    }
                  }
                }
              }
            }
          },
          operatorservice: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/operatorservice/v1;operatorservice",
                  java_package: "io.temporal.api.operatorservice.v1",
                  java_multiple_files: true,
                  java_outer_classname: "ServiceProto",
                  ruby_package: "Temporal::Api::OperatorService::V1",
                  csharp_namespace: "Temporal.Api.OperatorService.V1"
                },
                nested: {
                  AddSearchAttributesRequest: {
                    fields: {
                      search_attributes: {
                        keyType: "string",
                        type: "temporal.api.enums.v1.IndexedValueType",
                        id: 1
                      }
                    }
                  },
                  AddSearchAttributesResponse: {
                    fields: {}
                  },
                  RemoveSearchAttributesRequest: {
                    fields: {
                      search_attributes: {
                        rule: "repeated",
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  RemoveSearchAttributesResponse: {
                    fields: {}
                  },
                  ListSearchAttributesRequest: {
                    fields: {}
                  },
                  ListSearchAttributesResponse: {
                    fields: {
                      custom_attributes: {
                        keyType: "string",
                        type: "temporal.api.enums.v1.IndexedValueType",
                        id: 1
                      },
                      system_attributes: {
                        keyType: "string",
                        type: "temporal.api.enums.v1.IndexedValueType",
                        id: 2
                      },
                      storage_schema: {
                        keyType: "string",
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  DeleteNamespaceRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  DeleteNamespaceResponse: {
                    fields: {
                      deleted_namespace: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  DeleteWorkflowExecutionRequest: {
                    fields: {
                      namespace: {
                        type: "string",
                        id: 1
                      },
                      workflow_execution: {
                        type: "temporal.api.common.v1.WorkflowExecution",
                        id: 2
                      }
                    }
                  },
                  DeleteWorkflowExecutionResponse: {
                    fields: {}
                  },
                  AddOrUpdateRemoteClusterRequest: {
                    fields: {
                      frontend_address: {
                        type: "string",
                        id: 1
                      },
                      enable_remote_cluster_connection: {
                        type: "bool",
                        id: 2
                      }
                    }
                  },
                  AddOrUpdateRemoteClusterResponse: {
                    fields: {}
                  },
                  RemoveRemoteClusterRequest: {
                    fields: {
                      cluster_name: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  RemoveRemoteClusterResponse: {
                    fields: {}
                  },
                  DescribeClusterRequest: {
                    fields: {
                      cluster_name: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  DescribeClusterResponse: {
                    fields: {
                      supported_clients: {
                        keyType: "string",
                        type: "string",
                        id: 1
                      },
                      server_version: {
                        type: "string",
                        id: 2
                      },
                      membership_info: {
                        type: "temporal.api.cluster.v1.MembershipInfo",
                        id: 3
                      },
                      cluster_id: {
                        type: "string",
                        id: 4
                      },
                      cluster_name: {
                        type: "string",
                        id: 5
                      },
                      history_shard_count: {
                        type: "int32",
                        id: 6
                      },
                      persistence_store: {
                        type: "string",
                        id: 7
                      },
                      visibility_store: {
                        type: "string",
                        id: 8
                      },
                      version_info: {
                        type: "temporal.api.version.v1.VersionInfo",
                        id: 9
                      },
                      failover_version_increment: {
                        type: "int64",
                        id: 10
                      },
                      initial_failover_version: {
                        type: "int64",
                        id: 11
                      },
                      is_global_namespace_enabled: {
                        type: "bool",
                        id: 12
                      }
                    }
                  },
                  ListClustersRequest: {
                    fields: {
                      page_size: {
                        type: "int32",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  ListClustersResponse: {
                    fields: {
                      clusters: {
                        rule: "repeated",
                        type: "temporal.api.cluster.v1.ClusterMetadata",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  ListClusterMembersRequest: {
                    fields: {
                      last_heartbeat_within: {
                        type: "google.protobuf.Duration",
                        id: 1,
                        options: {
                          "(gogoproto.stdduration)": true
                        }
                      },
                      rpc_address: {
                        type: "string",
                        id: 2
                      },
                      host_id: {
                        type: "string",
                        id: 3
                      },
                      role: {
                        type: "temporal.api.enums.v1.ClusterMemberRole",
                        id: 4
                      },
                      session_started_after_time: {
                        type: "google.protobuf.Timestamp",
                        id: 5,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      page_size: {
                        type: "int32",
                        id: 6
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 7
                      }
                    }
                  },
                  ListClusterMembersResponse: {
                    fields: {
                      active_members: {
                        rule: "repeated",
                        type: "temporal.api.cluster.v1.ClusterMember",
                        id: 1
                      },
                      next_page_token: {
                        type: "bytes",
                        id: 2
                      }
                    }
                  },
                  OperatorService: {
                    methods: {
                      AddSearchAttributes: {
                        requestType: "AddSearchAttributesRequest",
                        responseType: "AddSearchAttributesResponse"
                      },
                      RemoveSearchAttributes: {
                        requestType: "RemoveSearchAttributesRequest",
                        responseType: "RemoveSearchAttributesResponse"
                      },
                      ListSearchAttributes: {
                        requestType: "ListSearchAttributesRequest",
                        responseType: "ListSearchAttributesResponse"
                      },
                      DeleteNamespace: {
                        requestType: "DeleteNamespaceRequest",
                        responseType: "DeleteNamespaceResponse"
                      },
                      DeleteWorkflowExecution: {
                        requestType: "DeleteWorkflowExecutionRequest",
                        responseType: "DeleteWorkflowExecutionResponse"
                      },
                      AddOrUpdateRemoteCluster: {
                        requestType: "AddOrUpdateRemoteClusterRequest",
                        responseType: "AddOrUpdateRemoteClusterResponse"
                      },
                      RemoveRemoteCluster: {
                        requestType: "RemoveRemoteClusterRequest",
                        responseType: "RemoveRemoteClusterResponse"
                      },
                      DescribeCluster: {
                        requestType: "DescribeClusterRequest",
                        responseType: "DescribeClusterResponse"
                      },
                      ListClusters: {
                        requestType: "ListClustersRequest",
                        responseType: "ListClustersResponse"
                      },
                      ListClusterMembers: {
                        requestType: "ListClusterMembersRequest",
                        responseType: "ListClusterMembersResponse"
                      }
                    }
                  }
                }
              }
            }
          },
          cluster: {
            nested: {
              v1: {
                options: {
                  go_package: "go.temporal.io/api/cluster/v1;cluster",
                  java_package: "io.temporal.api.cluster.v1",
                  java_multiple_files: true,
                  java_outer_classname: "MessageProto",
                  ruby_package: "Temporal::Api::Cluster::V1",
                  csharp_namespace: "Temporal.Api.Cluster.V1"
                },
                nested: {
                  ClusterMetadata: {
                    fields: {
                      cluster: {
                        type: "string",
                        id: 1
                      },
                      history_shard_count: {
                        type: "int32",
                        id: 2
                      },
                      cluster_id: {
                        type: "string",
                        id: 3
                      },
                      version_info: {
                        type: "temporal.api.version.v1.VersionInfo",
                        id: 4
                      },
                      index_search_attributes: {
                        keyType: "string",
                        type: "IndexSearchAttributes",
                        id: 5
                      },
                      cluster_address: {
                        type: "string",
                        id: 6
                      },
                      failover_version_increment: {
                        type: "int64",
                        id: 7
                      },
                      initial_failover_version: {
                        type: "int64",
                        id: 8
                      },
                      is_global_namespace_enabled: {
                        type: "bool",
                        id: 9
                      },
                      is_connection_enabled: {
                        type: "bool",
                        id: 10
                      }
                    }
                  },
                  IndexSearchAttributes: {
                    fields: {
                      custom_search_attributes: {
                        keyType: "string",
                        type: "temporal.api.enums.v1.IndexedValueType",
                        id: 1
                      }
                    }
                  },
                  HostInfo: {
                    fields: {
                      identity: {
                        type: "string",
                        id: 1
                      }
                    }
                  },
                  RingInfo: {
                    fields: {
                      role: {
                        type: "string",
                        id: 1
                      },
                      member_count: {
                        type: "int32",
                        id: 2
                      },
                      members: {
                        rule: "repeated",
                        type: "HostInfo",
                        id: 3
                      }
                    }
                  },
                  MembershipInfo: {
                    fields: {
                      current_host: {
                        type: "HostInfo",
                        id: 1
                      },
                      reachable_members: {
                        rule: "repeated",
                        type: "string",
                        id: 2
                      },
                      rings: {
                        rule: "repeated",
                        type: "RingInfo",
                        id: 3
                      }
                    }
                  },
                  ClusterMember: {
                    fields: {
                      role: {
                        type: "temporal.api.enums.v1.ClusterMemberRole",
                        id: 1
                      },
                      host_id: {
                        type: "string",
                        id: 2
                      },
                      rpc_address: {
                        type: "string",
                        id: 3
                      },
                      rpc_port: {
                        type: "int32",
                        id: 4
                      },
                      session_start_time: {
                        type: "google.protobuf.Timestamp",
                        id: 5,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      last_heartbit_time: {
                        type: "google.protobuf.Timestamp",
                        id: 6,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      },
                      record_expiry_time: {
                        type: "google.protobuf.Timestamp",
                        id: 7,
                        options: {
                          "(gogoproto.stdtime)": true
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Duration: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          },
          Timestamp: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          },
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          }
        }
      }
    }
  }
});

export { $root as default };
