using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.AI;

public class NativeNav : MonoBehaviour
{
    private NavMeshAgent agent;
    Vector3 wanderTarget = Vector3.zero;
    void Start()
    {
        agent = GetComponent<NavMeshAgent>();
    }

    void seek(Vector3 location)
    {
        agent.SetDestination(location);
    }
    void Update()
    {
        wander();
    }

    void wander()
    {
        float wanderRadius = 10;
        float wanderDistance = 10;
        float wanderJitter = 1;

        wanderTarget += new Vector3(Random.Range(-1.0f, 1.0f) * wanderJitter,0,Random.Range(-1.0f, 1.0f) *wanderJitter);

        wanderTarget.Normalize();
        wanderTarget *= wanderRadius;

        Vector3 targetLocal = wanderTarget + new Vector3(0, 0, wanderDistance);
        Vector3 targetWorld = this.gameObject.transform.InverseTransformVector(targetLocal);

        seek(targetWorld);

    }
}
